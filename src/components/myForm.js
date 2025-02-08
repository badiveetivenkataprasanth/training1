import React, {Component} from 'react'
import'./formStyles.css'
export class myForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textValue:"",
            skill:'view'
        }
    }
    changeTextValue = (event)=>{
        this.setState({
            textValue :
        event.target.value    
        })
    }
    changeSkill = (event)=>{
        this.setState({
            skill: event.target.value
        })
    }
    submitValues =(event)=>{
        alert("Form is submitted"+`${this.state.textValue}${this.state.skill}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}></form>
                <label>FirstName</label>
                <input type='text'value={this.state.textValue} onChange={this.changeTextValue}></input>
                <br/>
                <label>Skill</label>
                <select value={this.state.skill}onChange={this.changeSkill}></select>
                <option value='react'></option>
                <option value='angular'></option>
            </div>
        )
    }
}