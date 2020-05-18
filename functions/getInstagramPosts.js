require("isomorphic-fetch")
const url = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"1979635415","first":5}`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    console.log("cached")
    return cache.posts
  }
  const data = await fetch(url).then(res => res.json())
  const posts = slimUpPosts(data)
  // const posts = data
  console.log(posts)
  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
    thumbnail: edge.node.thumbnail_src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }))
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts()
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  })
}
