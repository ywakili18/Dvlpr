const NewPost = (props) => {
  return (
    <div class="sm:mt-20 sm:mx-auto text-center">
      <div class="w-1/2  rounded-2xl sm:ml-64">
        <form onSubmit={props.onSubmit}>
          <input
            maxLength="255"
            name="postContent"
            type="text"
            placeholder="Write a post"
            onChange={props.onChange}
            value={props.value}
            class="
                px-2
                ml-7
                focus:outline-none 
                rounded-lg 
                border 
                border-purple-400  
                bg-transparent 
                text-center"
          />
          <button
            type="submit"
            class="inline-flex 
              items-center 
              h-8
              px-4 
              text-indigo-100 
              transition-colors 
              duration-150 
              bg-indigo-700 rounded-lg 
              focus:shadow-outline 
              hover:bg-indigo-800 ml-5"
          >
            +
          </button>
        </form>
      </div>
    </div>
  )
}
export default NewPost
