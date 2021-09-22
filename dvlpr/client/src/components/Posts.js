import axios from 'axios'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Posts = (data) => {
  const [posts, managePosts] = useState([])
  // fetch all posts
  useEffect(() => {
    async function getPosts() {
      const res = await Client.get('/posts', data)
      console.log(res)
      managePosts(res.data)
    }
    getPosts()
  }, [])
  // console.log('this is' + comments)
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-2 px-10 shadow rounded-lg md:w-full">
        <ul>
          <h1 class="text-purple-light text-2xl font-bold font-brand">
            Posts section
          </h1>
          {posts.map((post) => (
            <div
              class="mt-10 border text-center bg-gradient-to-b 
            from-white-regular to-coolGray-light 
        border border-coolGray-light py-8 px-4
        rounded-lg shadow-sm focus:outline-none 
        focus:border-purple-regular focus:ring-1 
        focus:ring-purple-regular md:w-full text-s"
            >
              <li key={post.Id}>{post.postContent}</li>
              <li key={post.Id}>timestamp {post.createdAt}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Posts
