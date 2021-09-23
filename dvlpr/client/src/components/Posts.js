import Client from '../services/api'
import { useState, useEffect } from 'react'
import PostCard from './PostCard'

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

  return (
    <div class="sm:mx-auto text-center sm:w-1/2 ">
      <div class="mt-10 shadow rounded-lg md:w-full ">
        <div>
          {posts.map((post) => (
            <div
              class="mt-14 border text-center bg-gradient-to-b  
            from-white-regular to-coolGray-light 
        border border-coolGray-light py-8 px-4
        rounded-lg shadow-sm focus:outline-none 
        focus:border-purple-regular focus:ring-1 
        focus:ring-purple-regular md:w-full text-s"
            >
              <PostCard
                userId={post.userId}
                key={post.id}
                id={post.id}
                content={post.postContent}
                timeStamp={post.createdAt}
                comments={post.postsAndComments}
                managePosts={managePosts}
                posts={posts}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Posts
