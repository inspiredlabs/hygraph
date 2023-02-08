<script>
import { message } from '$lib/stores';

export let data;
</script>

<!-- <div class="bg-gray">
	{ data.page_server_data.posts }
</div> -->

<!-- learn: https://svelte.dev/tutorial/text-inputs -->
<input class="input-reset bn pa3" bind:value={$message}> <i>{$message}</i>

<div class="mr-auto ml-auto measure">
	<hr>
	<hr>
	<code class="bg-silver near-white">{ !data.page_server_data.contentKeywords ? 'Keywords&hellip;' : data.page_server_data.contentKeywords }</code>
	<br>
	<code class="bg-cobalt">{ !data.page_server_data.contentSummary ? 'Summary&hellip;' : data.page_server_data.contentSummary }</code>
	<hr>
	<hr>
</div>

<h1>Synthetic Meta</h1>
<aside>
	<p>
		In Hygraph on save, during edit-time: I'd like to pass the content body query to my prompt and using `+page.server.ts` return the data once to prerender the page.
	</p>
</aside>


<!-- learn: keyword research:
• TOOL: `keyword gap tool`, from: https://www.contentbot.ai/blog/news/12-seo-trends-for-2023-and-how-to-apply-them/
<title>Two Keywords Here | Your Brand Name</title>
• PICK one or two primary keywords to perfectly represent a new title for the summary of this page
• USE at least one of your keywords within a summary og this page (meta description content='this')
• WRITE your keyword three to five times for every 1,000 words in the content
• URLISE the page URL should synthesise the title properly
• PRO add your visuals that include keywords in the alt/title. Things optimised like this rank higher.
https://shortlist.io/how-to-do-seo-keyword-research-in-2023-ultimate-guide -->

<svelte:head>

<title>{ !data.page_server_data.contentKeywords ? 'Keywords&hellip;' : data.page_server_data.contentKeywords } | +BRAND </title>

<meta name="description" content={data.page_server_data.contentSummary.replace(/(?:\r\n|\r|\n)/g, '')}>

<!-- note: inspired by: jamseotools.com/ -->
<!-- learn: powerful JSON-LD snippet <script type="application/ld+json">
{
	"@context":"http://schema.org",
	"@type": "Article",
	"name": "Page Title",
	"url": "https://example.com/page-url",
	"headline": "Headline of this article",
	"description": "This article explains how to use SEO tags to enhance a webpage and create better visibility.",
	"publisher": {
			"@type": "Organization",
			"name": "Your Brand Name",
			"logo": {
					"@type": "ImageObject",
					"url": "https://example.com/your-brand-logo.png",
					"width": "250",
					"height": "75"
			}
	},
	"image": {
			"@type": "ImageObject",
			"url": "https://example.com/the-article-thumbnail.jpg",
			"width": "1200",
			"height": "630"
	}
}
</script> -->

</svelte:head>