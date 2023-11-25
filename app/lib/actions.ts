import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { unstable_noStore as noStore } from "next/cache";

export async function getStaticProps() {
  noStore();
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "harakles") {
          pinnedItems(last: 9) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  stargazerCount
                  description
                }
              }
            }
          }
        }
      }
    `,
  });
  const { user } = data;
  const pinnedItems = [];
  user.pinnedItems.edges.map((item, index) => {
    pinnedItems[index] = item.node;
  });
  return pinnedItems;
}

export async function getActivity() {
  noStore();
  var query = `
query ($id: Int, $page: Int) {
  Page(page: $page) {
    pageInfo {
      hasNextPage
    }
    activities(userId: $id, sort: [PINNED, ID_DESC]) {
      ... on ListActivity {
        id
        replyCount
        status
        progress
        isPinned
        likeCount
        createdAt
        user {
          id
          name
          avatar {
            large
          }
        }
        media {
          id
          bannerImage
          title {
            userPreferred
          }
          coverImage {
            large
            medium
          }
        }
      }
    }
  }
}
`;

  var variables = {
    id: 6089574,
    page: 1,
  };

  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  // Make the HTTP Api request
  const res = await fetch(url, options).catch((error) => {
    console.log("error:" + error);
    throw new Error("failed to fetch anime data");
  });

  const data = await res.json();
  return data.data.Page;
}

export function CalcTime(seconds: number) {
  const dateAtMs = seconds * 1000;
  const time = new Date(dateAtMs);
  const now = new Date();
  const diff = (now - time) / 1000;
  const units = [
    { unit: "year", secondsInUnit: 365 * 7 * 24 * 3600 },
    { unit: "week", secondsInUnit: 7 * 24 * 3600 },
    { unit: "day", secondsInUnit: 24 * 3600 },
    { unit: "hour", secondsInUnit: 3600 },
    { unit: "minute", secondsInUnit: 60 },
  ];

  for (const { unit, secondsInUnit } of units) {
    const x = diff / secondsInUnit;
    var count;
    if (x % 1 < 0.5) {
      count = Math.floor(x);
    } else {
      count = Math.ceil(x);
    }

    if (count >= 1) {
      return `${count} ${unit} ago`;
    }
  }

  return `${diff} seconds ago`;
}
