import React, { useState, useEffect } from "react"

// Get Instagram Posts
export function useInstagram() {
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
