import React, { Component } from 'react';
import './CommentSystem.css';

class CommentSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      comments: [],
      validation: {
        nameRegex: /^[a-zA-Z\s]{6,20}$/,
        commentRegex: /^.{1,100}$/,
        nameError: '',
        commentError: ''
      }
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
    const { name, comment, validation } = this.state;
    const { nameRegex, commentRegex } = validation;

    if (!nameRegex.test(name)) {
      this.setState({ validation: { ...validation, nameError: 'Name must be 6 to 20 characters long and contain only letters and spaces' } });
      isValid = false;
    } else {
      this.setState({ validation: { ...validation, nameError: '' } });
    }

    if (!commentRegex.test(comment)) {
      this.setState({ validation: { ...validation, commentError: 'Comment must be 1 to 100 characters long' } });
      isValid = false;
    } else {
      this.setState({ validation: { ...validation, commentError: '' } });
    }

    return isValid;
  };

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState(prevState => ({
      name,
      validation: { ...prevState.validation, nameError: !prevState.validation.nameRegex.test(name) ? 'Name must be 6 to 20 characters long and contain only letters and spaces' : '' }
    }));
  };

  handleCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(prevState => ({
      comment,
      validation: { ...prevState.validation, commentError: !prevState.validation.commentRegex.test(comment) ? 'Comment must be 1 to 100 characters long' : '' }
    }));
  };

  render() {
    const { name, comment, comments, validation } = this.state;
    const { nameError, commentError } = validation;
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
              onChange={this.handleNameChange}
              className={nameError ? 'error' : ''}
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={this.handleCommentChange}
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