import { useState } from 'react'
import PostCard from './PostCard'

const Posts = (props) => {
  const [time, manageTime] = useState([])

  return (
    <div class="sm:mx-auto text-center sm:w-1/2 ">
      <div class="shadow rounded-lg md:w-full ">
        <div>
          {props.posts.map((post) => (
            <div>
              <PostCard
                userId={post.userId}
                key={post.id}
                id={post.id}
                content={post.postContent}
                timeStamp={post.createdAt}
                comments={post.postsAndComments}
                managePosts={props.managePosts}
                posts={props.posts}
                toggleupdate={props.toggleupdate}
                update={props.update}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Posts
