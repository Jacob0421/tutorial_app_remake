import React, { Component } from "react";
import Counter from "./Counter";

class CounterContainer extends Component {
	render() {
		const { counters, onIncrement, onDecrement, onDelete, onReset } =
			this.props;

		return (
			<div>
				<div className="badge bg-secondary rounded-pill m-2">
					Valid Counters:{" "}
					{this.props.counters.filter((c) => c.value > 0).length}
				</div>
				<br />
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={onReset}>
					Reset Counters
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
						counter={counter}>
						<h4>Counter: {counter.id}</h4>
					</Counter>
				))}
			</div>
		);
	}
}

export default CounterContainer;
