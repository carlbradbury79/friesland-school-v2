import React, { useState, useEffect } from "react"

const url = "http://localhost:9000/.netlify/functions/getInstagramPosts"

function useInstagram() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts
}

const Instagram = () => {
  const gramz = useInstagram()
  console.log("gramz", gramz)
  return (
    <div>
      {gramz.map(gram => (
        <a href={gram.url} key={gram.id}>
          <img src={gram.thumbnail} alt={gram.caption} />{" "}
        </a>
      ))}
    </div>
  )
}

export default Instagram
