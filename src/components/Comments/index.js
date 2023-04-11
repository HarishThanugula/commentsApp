import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: initialCommentList,
    backGroundColor: initialContainerBackgroundClassNames,
    count: 0,
  }

  getCommenterName = event => {
    this.setState({name: event.target.value})
  }

  getChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {comment, name} = this.state
    const newComment = {
      id: uuidv4,
      name,
      comment,
      isLike: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLike: !eachItem.isLike}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filterComment = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentList: filterComment})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {name, comment, commentList, backGroundColor, count} = this.state
    const colors = backGroundColor.map(eachColor =>({
        return eachColor
    })

    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <div className="container">
          <form className="comment-container" onSubmit={this.addComment}>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              type="text"
              htmlFor="review-40"
              className="input-element"
              onChange={this.getCommenterName}
              value={name}
            />
            <textarea
              className="text-area"
              id="review-40"
              rows="5"
              cols="20"
              placeholder="Your Comment"
              onChange={this.getChangeComment}
              value={comment}
            ></textarea>
            <button className="add-comment-btn" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>

        <hr className="divide-line" />
        <p className="comments">
          <span className="count">{count}</span> Comments
        </p>
        <div className="comments-card">
          <ul>
            {commentList.map(eachComment => (
              <CommentItem
                commentItems={eachComment}
                key={eachComment.id}
                colors={colors}
                onLikeComment={this.onLikeComment}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
