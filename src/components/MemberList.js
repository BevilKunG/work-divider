import React, { Component } from 'react'
import './MemberList.css'

class MemberList extends Component {
  state = {
    randomNumber:[],
    colors:['red','orange','yellow','olive','green','teal','blue','violet','purple','pink']
  }

  randomPick = () => {
    let numbers = this.props.members.map((member,index) => index+1)
    const randomNumber = this.props.members.map(member => {
                  let pickedIndex = Math.floor(Math.random() * numbers.length)
                  const pickedNumber = numbers[pickedIndex]
                  numbers = [...numbers.slice(0,pickedIndex),...numbers.slice(pickedIndex+1)]
                  return pickedNumber;
                })
    this.setState({randomNumber})
  }

  renderMember = () => {
    return this.props.members.map((member,index) => (
      <div className={`${this.state.colors[index%this.state.colors.length]} card`} key={index}>
        <div className="content">
          <div className="ui center aligned huge header">{member}</div>
          {this.state.randomNumber[index]!==undefined?<div className={`ui center aligned medium ${this.state.colors[index%this.state.colors.length]} header`}>{`work #${this.state.randomNumber[index]}`}</div>:null}
        </div>
      </div>
    ))
  }

  render(){
    return (
      <div>
        <button className="ui primary button space" onClick={this.randomPick}>Random?</button>
        <div className="ui cards space">{this.renderMember()}</div>
      </div>
    )
  }
}

export default MemberList
