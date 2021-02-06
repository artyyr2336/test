import { useSelector } from "react-redux"
import Home from "./components/pages/Home"

const App = () => {
	const state = useSelector(state => state)

	console.log(state)

	return <Home />
}

export default App
