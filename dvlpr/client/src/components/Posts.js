import axios from 'axios'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
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
  console.log('this is posts' + posts)

  return (
    <div class="sm:mx-auto text-center sm:w-1/2 ">
      <div class="mt-10 shadow rounded-lg md:w-full ">
        <ul>
          {posts.map((post) => (
            <div
              class="mt-14 border text-center bg-gradient-to-b  
            from-white-regular to-coolGray-light 
        border border-coolGray-light py-8 px-4
        rounded-lg shadow-sm focus:outline-none 
        focus:border-purple-regular focus:ring-1 
        focus:ring-purple-regular md:w-full text-s"
            >
              <li key={post.Id}>{post.postContent}</li>
              <li key={post.Id}>timestamp {post.createdAt}</li>
              <NewComment />
              <div>
                <li key={post.Id}>
                  {post.postsAndComments.map((comment) => (
                    <Comments
                      key={comment.id}
                      comments={comment.commentContent}
                      timeStamp={comment.createdAt}
                      user={comment.commentsAndUsers.userName}
                    />
                  ))}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Posts
