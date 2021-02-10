import { useState, useEffect } from "react"

// Get Twitter Posts
export function useTwitter() {
  const url = ".netlify/functions/getInstagramPosts"
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  // console.log(posts)
  return posts
}
