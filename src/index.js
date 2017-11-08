import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

//Exercise 1: Create a AddressLabel Component that takes a person object as a prop, and renders
// there name and address.

const personObj = {
	name: "Robert Yarborough",
	address: "123 Hoboken, NJ 123456789"
};






//declare AddressLabel as a arrow-function component, with destructured prop of object type
const AddressLabel =({person}) => {
	// declare local variables
	let {name, address} = person;
	//render 1 element via return statement
	return (
		<div className="AddressLabel">
			<span className="name">{name}</span>
			<span className="address">{address}</span>
		</div>);
};


//render Dom elements
ReactDOM.render(<AddressLabel person={personObj}/>, document.querySelector('#root'));