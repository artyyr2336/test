import React, { useEffect, useState } from "react"
import { People } from "../../components"
import { data1 } from "../../data/data1"
import { data2 } from "../../data/data2"
import { data3 } from "../../data/data3"
import { data4 } from "../../data/data4"
import { data5 } from "../../data/data5"
import "./index.scss"

const Home = () => {
	const [dataServer, setDataServer] = useState(data1)
	const dataArr = [data1, data2, data3, data4, data5]

	let index = 0

	useEffect(() => {
		setInterval(() => {
			if (index === 5) {
				index = 0
			}
			setDataServer(dataArr[index])
			index++
		}, 15000)
	}, [])

	return (
		<div className="bg">
			<div className="circle pos">
				{dataServer.participants.map((item, index) => (
					<People
						data={item}
						key={item.id}
						rotate={360 / dataServer.participants.length}
						index={index}
					/>
				))}
				<div className="name">{dataServer.name}</div>
				<div className="date">
					Дата проведения:
					<div className="date-num">{dataServer.date}</div>
				</div>
			</div>
		</div>
	)
}

export default Home
