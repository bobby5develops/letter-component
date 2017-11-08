import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

// Exercise 1: Create a AddressLabel Component that takes a person object as a prop, and renders
// there name and address.

// Exercise 2: Create a Envelope Component, that takes toPerson, and fromPerson as props.
// and uses AddressLabel to render address and recipient address with a stamp.

const senderObj = {
	senderAddress: {
		name: "Robert Yarborough",
		address: "123 Hoboken, NJ 123456789"
	}
};

const recieverObj = {
	recieverAddress: {
		name: "Kharisma Miller",
		address: "123 Teaneck, NJ 123456789"
	}
};



// Exercise 2 / part 1 - Declare the Envelope Component
const Envelope = ({toPerson, fromPerson}) => {
	// declare local variables
	let {senderAddress} = fromPerson;
	let {recipientAddress} = toPerson;
	// render 1 element via the return statement
	return (

		<div>
			<AddressLabel person={senderObj.senderAddress}>{senderAddress}</AddressLabel>
			<AddressLabel person={recieverObj.recieverAddress}>{recipientAddress}</AddressLabel>
		</div>
	);
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
ReactDOM.render(<Envelope toPerson={recieverObj} fromPerson={senderObj} />, document.querySelector('#root'));