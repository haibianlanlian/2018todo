import React from 'react';
export default class TodoList extends React.Component{
	render(){
		let todo =this.props.todo
		return (
				<li>
					<div className="row">
						<div className="col-md-1">
							<input type="checkbox" checked={todo.complete} onChange={()=>this.props.toggle(todo.id)}/>
						</div>
						<div className="col-md-10" style={{ textDecoration: todo.complete===true ? 'line-through' : 'none' }} >
							{this.props.todo.title}
						</div>
						<div className="col-md-1">
							<button className="btn btn-danger" onClick={()=>this.props.remove(todo.id)}>del</button>
						</div>
					</div>		
				</li>
			)
	}
}