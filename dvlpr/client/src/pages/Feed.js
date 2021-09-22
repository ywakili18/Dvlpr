import { useEffect } from 'react'
import Comment from '../components/Comment'
import PostCard from '../components/PostCard'
import Comments from '../components/Comments'
export default function () {
  return (
    <div>
      <Comments />
      <Comment />
      <PostCard />
    </div>
  )
}
