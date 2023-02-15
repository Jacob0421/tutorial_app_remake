import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./components/CounterContainer";
import NavBar from "./components/NavBar";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 },
		],
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDelete = () => {};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});

		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		if (counters[index].value !== 0) {
			counters[index].value--;
		}
		this.setState({ counters });
	};

	render() {
		console.log("app rendered");

		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter((c) => c.value > 0).length
					}
				/>
				<main className="container">
					<CounterContainer
						counters={this.state.counters}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
