export async function gqlFetch(
  query,
  options
) {
  const optionsHeader = new Headers(options?.headers || {});
  optionsHeader.append('Content-Type', 'application/json');
  optionsHeader.append('Authorization', 'Bearer oAxmEgKGZCl173hTTV0-sjB3PoP_CDiMrlPanmFVQK0');

  return fetch(`https://graphql.contentful.com/content/v1/spaces/vtcp8ixiurhp/`, {
    method: "POST",
    headers: optionsHeader,
    body: JSON.stringify({ query }),
  })
}