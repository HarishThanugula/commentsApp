import './index.css'

const CommentItem = props => {
  const {commentItems, colors, onLikeComment, deleteComment} = props
  console.log(colors)
  const {name, comment, isLike, id} = commentItems

  const onChangeLikeImage = () => {
    onLikeComment(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const starImage = isLike ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
      alt="like"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      alt="like"
    />
  )

  return (
    <li className="comment-items">
      <div className="special">
        <p className="first-letter">{name[0]}</p>
        <h1 className="commenter-name">{name}</h1>
        <p className="minute">Less than a minute ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-container">
        <button type="button" onClick={onChangeLikeImage}>
          <img src={starImage} alt="like" />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onDeleteComment}
        />
      </div>
    </li>
  )
}

export default CommentItem
