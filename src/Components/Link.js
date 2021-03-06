import React from 'react';
import './Link.scss';
import {
	Link,
	useLocation
} from "react-router-dom";

import Dot from './Icons/Dot';
import Cube from './Icons/Cube';
import Honeycomb from './Icons/Honeycomb';
import Blockchain from './Icons/Blockchain';
import Fingerprint from './Icons/Fingerprint';

function titleCase(str) {
	return str.toLowerCase().split(' ').map(function (word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
}

function chooseIcon(props, location) {
	if (props.iconHover &&
		props.icon) {
		switch (props.icon) {
			case "Artists":
				return <Fingerprint
					className={`nav-icon ${location.pathname === props.to.toLowerCase() ? "nav-icon-active" : null}`}
					height={"35px"}
					width={"35px"}
				/>
			case "Releases":
				return <Dot
					className={`nav-icon ${location.pathname === props.to.toLowerCase() ? "nav-icon-active" : null}`}
					height={"35px"}
					width={"35px"}
				/>
			case "Services":
				return <Honeycomb
					className={`nav-icon ${location.pathname === props.to.toLowerCase() ? "nav-icon-active" : null}`}
					height={"35px"}
					width={"35px"}
				/>
			case "Store":
				return <Cube
					className={`nav-icon ${location.pathname === props.to.toLowerCase() ? "nav-icon-active" : null}`}
					height={"35px"}
					width={"35px"}
				/>
			case "Atlas":
				return <Blockchain
					className={`nav-icon ${location.pathname === props.to.toLowerCase() ? "nav-icon-active" : null}`}
					height={"35px"}
					width={"35px"}
				/>
			default:
				return null

		}
	}
	else {
		return props.iconText
	}
}

export default function LinkWrapper(props) {
	const text = titleCase(props.text);
	const location = useLocation();
	return (
		<Link
			className="link-icon-navbar"
			id={props.id}
			style={{
				paddingTop: '20px',
				textDecoration: 'none',
				fontSize: props.size,
			}}
			to={props.to.toLowerCase()}
		>
			<span
				className={
					`nav-link 
				${props.lastItem ? "text-nav-icon" : null} 
				${location.pathname === props.to.toLowerCase() ? "nav-link-active" : null}
				`
				}
			>
				{props.iconHover ? chooseIcon(props, location) : text}
			</span>
			{/* <span className="text-shadow hover-nav-link text-navbar-link-color">{props.text}</span> */}
		</Link>
	);
}
