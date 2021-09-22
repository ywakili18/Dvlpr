import { useEffect } from 'react'
import PostCard from '../components/PostCard'
import Comments from '../components/Comments'
import NewPost from '../components/NewPost'
import {
  LoadPosts,
  CreatePost,
  NewPostState
} from '../store/actions/PostActions'
import { User, authenticateUser } from '../store/actions/UserActions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    postState: state.postState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    loadPosts: () => dispatch(LoadPosts()),
    createPost: (newPost) => dispatch(CreatePost(newPost)),
    newPostState: (content) => dispatch(NewPostState(content)),
    setUser: (user) => dispatch(User(user)),
    authUser: (toggle) => dispatch(authenticateUser(toggle))
  }
}

const Feed = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.createPost({
      userId: props.userState.user.id,
      postContent: props.postState.newPost.postContent
    })
    props.newPostState({ postContent: '' })
  }

  const handleChange = (e) => {
    props.newPostState({
      postContent: e.target.value
    })
  }

  return (
    <div>
      <Comments />
      <NewPost
        key="newPostInput"
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={props.postState.newPost.postContent}
      />
      <PostCard />
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Feed)
