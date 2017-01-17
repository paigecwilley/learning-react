import React, {Component} from 'react'
import './Home.scss'

class Home extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			name:'',
			city: ''
		}
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e, inputField){
		var update = {}
		update[inputField] = e.target.value
		// console.log('update', update)
		this.setState(update)
	}

	onSubmit(e) {
		e.preventDefault()
		console.log(this.state)
	}

	render (){
		return (
			<div className="outerDiv">
				<form>
					<input placeholder="Name" onChange={(e) => {this.onChange(e, 'name')}}/>
					<input placeholder="City" onChange={(e) => {this.onChange(e, 'city')}}/>
					<button type="submit" onClick={this.onSubmit}>Submit</button>
				</form>	

			</div>
		)
	}
}

export default Home