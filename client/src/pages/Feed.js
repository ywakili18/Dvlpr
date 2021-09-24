import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import NewPost from '../components/NewPost'
import {
  LoadPosts,
  CreatePost,
  NewPostState
} from '../store/actions/PostActions'
import { User, authenticateUser } from '../store/actions/UserActions'
import { connect } from 'react-redux'
import Client from '../services/api'

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
  const [posts, managePosts] = useState([])
  const [update, toggleupdate] = useState(false)

  useEffect(() => {
    async function getPosts() {
      const res = await Client.get('/posts')
      const sorted = res.data.sort((a, b) => b.id - a.id)
      console.log(sorted)
      managePosts(sorted)
    }
    getPosts()
  }, [update])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (props.postState.newPost.postContent === '') {
      return
    }
    await props.createPost({
      userId: props.userState.user.id,
      postContent: props.postState.newPost.postContent
    })
    props.newPostState({ postContent: '' })
    toggleupdate(() => {
      return update ? false : true
    })
  }

  const handleChange = (e) => {
    props.newPostState({
      postContent: e.target.value
    })
  }

  return (
    <div>
      <NewPost
        key="newPostInput"
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={props.postState.newPost.postContent}
      />
      <div className="border-4  mt-20 border-indigo-700 ">
        <div className="bg-gray-900 shadow-2xl">
          <div classname="">
            <Posts
              posts={posts}
              managePosts={managePosts}
              toggleupdate={toggleupdate}
              update={update}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Feed)
