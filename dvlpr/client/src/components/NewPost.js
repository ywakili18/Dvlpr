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
      sm:w-1/4
      rounded-2xl 
      sm:mx-auto 
      sm:py-8
      border-purple-400
      bg-gray-700
      "
      >
        <form onSubmit={props.onSubmit} class="flex items-center sm:mx-auto">
          <textarea
            maxLength="255"
            name="postContent"
            type="text"
            placeholder="Write a post"
            onChange={props.onChange}
            value={props.value}
            class="
                sm:px-2
                sm:py-2
                sm:ml-9
                focus:outline-none 
                border 
                border-t-0
                border-l-0
                border-r-0
                border-b-2
                border-purple-500  
                b
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
              bg-gray-600 rounded-lg 
              focus:shadow-outline 
              hover:bg-indigo-800 ml-2
              transition duration-500
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
