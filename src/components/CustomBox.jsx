import React, { Component } from 'react'

export default class CustomBox extends Component {
  
  render(props) {
    const svg  = this.props.svg;
    const heading = this.props.heading;
    const ptext = this.props.ptext;
    return (
      <div className='custombox--component'>
        <img src ={svg}  alt = 'not showing' />
        <h3>{heading}</h3>
        <p>{ptext}</p>
      </div>
    )
  }
}
