import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { onIncrement, onDecrement, onDelete, counter } = this.props;
		return (
			<div>
				{this.props.children}
				<span className={this.getClassName()}>
					{this.formatValue()}
				</span>
				<label>
					<button
						onClick={() => onIncrement(counter)}
						className="btn btn-primary btn-sm m-2">
						+
					</button>
				</label>
				<button
					onClick={() => onDecrement(counter)}
					className="btn btn-primary btn-sm m-2">
					-
				</button>
			</div>
		);
	}

	getClassName() {
		const { value } = this.props.counter;
		let classes = "badge m-2 text-bg-";
		classes += value === 0 ? "warning " : "secondary";
		return classes;
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
