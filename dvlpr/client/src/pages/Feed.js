import { useEffect } from 'react'
import Comment from '../components/Comment'
import PostCard from '../components/PostCard'
import Comments from '../components/Comments'
import NewPost from '../components/NewPost'
import {
  LoadPosts,
  CreatePost,
  NewPostState
} from '../store/actions/PostActions'
import { User, authenticateUser } from '../store/actions/UserActions'
import { CheckSession } from '../services/Auth'
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
    newPostState: (userId, content) => dispatch(NewPostState(userId, content)),
    setUser: (user) => dispatch(User(user)),
    authUser: (toggle) => dispatch(authenticateUser(toggle))
  }
}

const Feed = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefualt()
    await props.createPost(props.postState.newPost)
  }

  const handleChange = (e) => {
    props.newPostState({
      userId: props.userState.user.id,
      postContent: e.target.value
    })
  }

  return (
    <div>
      <NewPost
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={props.postState.newPost.postContent}
      />
      <PostCard />
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Feed)
