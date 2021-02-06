import React from "react"
import styled, { keyframes } from "styled-components"
import "./index.scss"

const Circle = ({ index, rotate, data }) => {
	const rotation = (index, rotate) => keyframes`
	from { transform: rotate(${rotate * index}deg)  translateX(300px)}
  to   { transform: rotate(${rotate * index + 360}deg) translateX(300px)}
	
`

	const Item = styled.div`
		width: 70px;
		height: 70px;
		border-radius: 100%;
		animation: ${props => rotation(props.index, props.rotate)} 60s linear infinite;
		position: absolute;
		display: block;
		left: 50%;
		margin: -30px;

		img {
			width: 100%;
			height: 100%;
			border-radius: 100%;
			border: 2px solid white;
			object-fit: cover;
		}
	`

	return (
		<div className="">
			<Item rotate={rotate} index={index}>
				<img src={data.photo_url} title={data.first_name} />
			</Item>
		</div>
	)
}

export default Circle
