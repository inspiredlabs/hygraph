// learn: scottspence.com/posts/sveltekit-environment-variables-with-the-sveltekit-env-module
import { PUBLIC_GRAPHQL_ENDPOINT } from "$env/static/public";
import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(PUBLIC_GRAPHQL_ENDPOINT);
