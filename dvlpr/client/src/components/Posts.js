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
        <ul>
          {posts.map((post) => (
            <div
              class="
              mt-20 border-solid border-8 border-purple-400 rounded-2xl sm:py-10"
            >
              <PostCard
                userId={post.userId}
                key={post.id}
                id={post.id}
                content={post.postContent}
                timeStamp={post.createdAt}
                comments={post.postsAndComments}
                managePosts={managePosts}
                post={posts}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Posts
