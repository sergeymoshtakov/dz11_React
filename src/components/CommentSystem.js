import React, { Component } from 'react';
import './CommentSystem.css';

class CommentSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      comments: [],
      nameError: '',
      commentError: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateInputs()) {
      const { name, comment, comments } = this.state;
      const newComment = { name, comment, id: Date.now() };
      this.setState({
        comments: [newComment, ...comments],
        name: '',
        comment: ''
      });
    }
  };

  validateInputs = () => {
    let isValid = true;
    const { name, comment } = this.state;
    if (!name.trim()) {
      this.setState({ nameError: 'Please enter your name' });
      isValid = false;
    } else {
      this.setState({ nameError: '' });
    }
    if (!comment.trim()) {
      this.setState({ commentError: 'Please enter your comment' });
      isValid = false;
    } else {
      this.setState({ commentError: '' });
    }
    return isValid;
  };

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
    if (!name.trim()) {
      this.setState({ nameError: 'Please enter your name' });
    } else {
      this.setState({ nameError: '' });
    }
  };

  handleCommentChange = (e) => {
    const comment = e.target.value;
    this.setState({ comment });
    if (!comment.trim()) {
      this.setState({ commentError: 'Please enter your comment' });
    } else {
      this.setState({ commentError: '' });
    }
  };

  render() {
    const { name, comment, comments, nameError, commentError } = this.state;
    return (
      <div>
        <h2>Comment System</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onInput={this.handleNameChange}
              className={nameError ? 'error' : ''}
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onInput={this.handleCommentChange}
              className={commentError ? 'error' : ''}
            ></textarea>
            {commentError && <span className="error-message">{commentError}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Comments:</h3>
          {comments.map((c) => (
            <div key={c.id}>
              <p><strong>{c.name}:</strong> {c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommentSystem;