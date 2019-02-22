import React,{ Component } from 'react'
import './InsertBar.css'

class InsertBar extends Component {
  state = {
    term:""
  }

  onInputChange(event){
    this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault()
    this.props.addMember(this.state.term)
    this.setState({term:""})
  }

  render(){
    return (
      <form className="ui form space" onSubmit={event => this.onFormSubmit(event)}>
        <div className="field">
          <input type="text"
                 value={this.state.term}
                 onChange={event => this.onInputChange(event)}
                 placeholder="Name"/>
        </div>
        <button className="ui right floated positive button">Add Member</button>

      </form>
    )
  }
}

export default InsertBar
