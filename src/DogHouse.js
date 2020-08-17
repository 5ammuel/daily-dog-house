import React, { Component } from "react";
//This is where images are called
class DogHouse extends Component {
constructor() {
		super();
		this.state = {
			images: "",
		};
	}

componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
			return res
				.json()
				.then((dogData) => {
					this.setState({ images: dogData });
				})
				.catch((err) => {
					return "Error";
				});
		});
	}
render () {
    return (
        <div>
            <image src={this.props.url} alt="Good pupper!" />
        </div>
    )
}
}

export default DogHouse;