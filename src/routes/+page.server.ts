import { message } from '$lib/stores';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';


// learn: svelte.dev/tutorial/writable-stores
let messageValue: string;

message.subscribe(value => {
  messageValue = value;
});


export const load: PageServerLoad = async () => {

  const config = new Configuration({
    apiKey: OPENAI_API_KEY
  });

  const openai = new OpenAIApi(config);

  let contentKeywords = 'str';
  let contentSummary = 'str';

  // usage: Appropriate title using keywords
  async function setMetaTitle() {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      // write a list of the important key takeaways from this text:
      prompt: `Using only full, complete scentences and using the word children rather than people, continue without phrases like: "this article discusses" or "CWB stands for", or "CWB means", and continue without adding html tags, continue with plain text only, never change the CWB acronym, and continue to KEEP IT SHORT rite a 16 word summary for a second-grader about CWB (Clowns Without Borders) from this article: ${messageValue}.`,
      // usage: only one-or-theother: `top_p: 1.0,` or:
      temperature: 0.9,
      max_tokens: 42, // 4 tokens = 3 words.
    });

    contentKeywords = completion.data.choices[0].text;
    console.log(contentKeywords.length);
  }

  // spend credits on:
  await setMetaTitle();

  // usage: ~140 characters
  async function setMetaDescription() {
    const completion = await openai.createCompletion({
      // text-embedding-ada-002
      // learn: why use `text-curie-001`? github.com/tmgthb/openai_api_embedding_search
      model: 'text-curie-001',
      prompt: `Using only full, complete scentences and using the word children rather than people, continue without phrases like: "this article discusses" or "CWB stands for", or "CWB means", and continue without adding html tags, continue with plain text only, never change the CWB acronym, and continue to KEEP IT SHORT rite a 16 word summary for a second-grader about CWB (Clowns Without Borders) from this article: ${messageValue}.`,
      // usage: only one-or-theother: `top_p: 1.0,` or:
      temperature: 0.3,
      max_tokens: 42, // 4 tokens = 3 words. for a 160length ~120 tokens.
      // usage: `var wordCount = str.match(/(\w+)/g)?.length * 0.75 || 0; ` === 4 tokens = 3 words, from: stackoverflow.com/questions/6543917/count-number-of-words-in-string-using-javascript
      // learn: `tiktokens` counter: github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
      //frequency_penalty: 0.0,
      //presence_penalty: 0.0
    });
    contentSummary = completion.data.choices[0].text;
    console.log(contentSummary.length);

  }

  // spend credits on:
  await setMetaDescription();

  return {
    page_server_data: {
      contentKeywords: contentKeywords,
      contentSummary: contentSummary,
    }
  };

};