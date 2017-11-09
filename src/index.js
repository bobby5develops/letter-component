import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

// Exercise 1: Create a AddressLabel Component that takes a person object as a prop, and renders
// there name and address.

// Exercise 2: Create a Envelope Component, that takes toPerson, and fromPerson as props.
// and uses AddressLabel to render address and recipient address with a stamp.

const letterObj = {
	senderAddress: {
		name: "Robert Yarborough",
		address: "123 Hoboken, NJ 123456789"
	},
	recieverAddress: {
		name: "Kharisma Miller",
		address: "123 Teaneck, NJ 123456789"
	},
	stampImg: "Robert Yarborough Studios, LLC."
};



// Exercise 2 / part 1 - Declare the Envelope Component
const Envelope = ({toPerson, fromPerson}) => {
	// declare local variables
	let {senderAddress} = fromPerson;
	let {recipientAddress} = toPerson;
	// render 1 element via the return statement
	return (

		<div className="Envelope">
			<AddressLabel person={letterObj.senderAddress}>{senderAddress}</AddressLabel>
			<AddressLabel person={letterObj.recieverAddress}>{recipientAddress}</AddressLabel>
			<Stamp hash={letterObj.stampImg} />
		</div>
	);
};


//declare AddressLabel as a arrow-function component, with destructed prop of object type
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

// declare Stamp as a arrow-function component, with destructed prop of string type
const Stamp = ({hash})=> {
	// declare img url
	let url = `https://s.gravatar.com/avatar/3997db64b950809c5314e8aa83101ade?s=80/${hash}`;
	// render the img element
	return (
		<img src={url} alt="stamp" className="stamp"/>
	);
};


//render Dom elements
ReactDOM.render(<Envelope toPerson={letterObj} fromPerson={letterObj} />, document.querySelector('#root'));