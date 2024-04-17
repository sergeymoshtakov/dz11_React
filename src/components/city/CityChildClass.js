import React, { PureComponent } from 'react'

class CityChildClass extends PureComponent {

  render() {
    return (
      <p className="city-info">{this.props.description}</p>  
    )
  }
}

export default CityChildClass