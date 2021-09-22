import React from 'react'
const Comment = ({ comment }) => {
  return (
    <div>
      <div>{comment.userName}</div>
      <div>{comment.createdAt}</div>
      <div>{comment.commentContent}</div>
    </div>
  )
}
export default Comment
