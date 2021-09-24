const Comments = (props) => {
  return (
    <div class="">
      <div class="">
        <ul>
          <div class="">
            <li>{props.user}</li>
            <li>{props.comments}</li>
            <li>timestamp{props.timeStamp}</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Comments
