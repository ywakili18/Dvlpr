import Client from '../services/api'
import { useState, useEffect } from 'react'
import PostCard from './PostCard'

const Posts = (data) => {
  const [posts, managePosts] = useState([])
  // fetch all posts
  useEffect(() => {
    async function getPosts() {
      const res = await Client.get('/posts', data)
      const sorted = res.data.sort((a, b) => b.id - a.id)
      managePosts(sorted)
    }
    getPosts()
  }, [])

  return (
    <div class="sm:mx-auto text-center sm:w-1/2 ">
      <div class="mt-10 shadow rounded-lg md:w-full ">
        <div>
          {posts.map((post) => (
            <div>
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
