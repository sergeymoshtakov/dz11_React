import React, { PureComponent } from 'react'

class BookChildClass extends PureComponent {

  render() {
    return (
        <p>{this.props.description}</p>
    )
  }
}

export default BookChildClass