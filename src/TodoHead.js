import React from 'react';
const ENTER_KEY=13
export default class TodoHead extends React.Component{
	handleKeyDown=(e)=>{	

		if(e.keyCode === ENTER_KEY){
			e.preventDefault()
			let title = e.target.value
			if(title.length>0){
console.log(title)
			this.props.addTodo({title})
			e.target.value=''
			}
			
		}
	}

	render(){
		return (
				<form>
				<div className="form-group">
					<input type="text" className="from-control"   autoFocus="autofocus" onKeyDown={this.handleKeyDown} />
				</div>
				</form>
	
			)
	}
}