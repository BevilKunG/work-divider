import React,{ Component } from 'react'
import InsertBar from './InsertBar'
import MemberList from './MemberList'

class App extends Component {
  state = {
    members:[]
  }

  addMember = member => {
    this.setState({members:[...this.state.members,member]})
  }

  render(){
    // console.log(this.state.members);
    return (
      <div className="ui container">
        <InsertBar addMember={this.addMember}/>
        <MemberList members={this.state.members} />
      </div>
    )
  }
}

export default App
