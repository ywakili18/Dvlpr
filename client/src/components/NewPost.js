import { BiCommentAdd } from 'react-icons/bi'
const NewPost = (props) => {
  return (
    <div
      class="
    sm:mt-20 
    sm:mx-auto 
    text-center
    "
    >
      <div
        class="
      text-md
      sm:mx-auto 
      sm:py-4
      bg-gray-900
      justify-between w-screen items-center
      "
      >
        <form onSubmit={props.onSubmit}>
          <input
            name="postContent"
            type="text"
            placeholder="Write a post"
            onChange={props.onChange}
            value={props.value}
            class="
                text-white
                sm:mx-auto
                focus:outline-none 
                bg-transparent 
                text-center
                text-purple-300
                "
          />
          <button
            type="submit"
            class="
              h-8
              p-2
              px-8   
              text-indigo-100 
              transition-colors 
              duration-150 
              bg-gray-400 rounded-lg 
              focus:shadow-outline 
              hover:bg-purple-800 
              transition duration-500
              
              "
          >
            <BiCommentAdd />
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewPost
