import React, { PureComponent } from 'react'

class BookChildReview extends PureComponent {

  render() {
    return (
        <li>{this.props.description}</li>
    )
  }
}

export default BookChildReview