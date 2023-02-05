// old-way return type: `index.json.js`

import { client } from "$lib/graphql-client";
import { json } from "@sveltejs/kit";
import { gql } from "graphql-request";

export const GET = async () => {
  try {
    const query = gql`
      query Assets {
        posts {
          title
          slug
          date
          tags
          coverImage {
            url
          }
        }
      }
    `;

    const { posts } = await client.request(query);

    return json({
      posts,
    });
  } catch (error) {
    return json({
      status: 500,
      body: { error },
    });
  }
};
