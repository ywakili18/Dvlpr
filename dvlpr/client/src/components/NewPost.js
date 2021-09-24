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
      md:w-2/5
      sm:1/2
      rounded-2xl 
      text-sm
      sm:mx-auto 
      sm:py-4
      bg-purple-200
      "
      >
        <form onSubmit={props.onSubmit} class="flex items-center sm:mx-auto">
          <textarea
            name="postContent"
            type="text"
            placeholder="Write a post"
            onChange={props.onChange}
            value={props.value}
            class="
                text-gray-900
                sm:px-14
                sm:py-4
                sm:mx-auto
                sm:mr-16
                focus:outline-none 
                border 
                border-t-0
                border-l-0
                border-r-0
                border-b-2
                border-purple-500  
                bg-transparent 
                text-center
                "
          />
          <button
            type="submit"
            class="
              h-8
              px-4 
              text-indigo-100 
              transition-colors 
              duration-150 
              bg-gray-400 rounded-lg 
              focus:shadow-outline 
              hover:bg-purple-800 
              transition duration-500
              sm:mr-20
              "
          >
            +
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewPost
