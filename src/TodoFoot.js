import React from 'react';
import * as filterTypes from './filter-types';
export default class TodoFoot extends React.Component{
	render(){
		let todo =this.props.todo
		return (
				<div className="container">
					<div className="row">
						还有{this.props.activeTodoCount}个待办
						<button onClick={()=>this.props.changeType(filterTypes.ALL)}>全部</button>
						<button onClick={()=>this.props.changeType(filterTypes.ACTIVE)}>未完成</button>
						<button onClick={()=>this.props.changeType(filterTypes.COMPLETE)}>已完成</button>
						<button onClick={()=>this.props.removeComplete()}>删除已完成</button>
					</div>
				</div>
			)
	}
}