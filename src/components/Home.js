import GoalsIndex from "./goals/GoalsIndex"

import {Container} from 'react-bootstrap'

const Home = (props) => {
	
	const { msgAlert, user } = props
	console.log('this is user in home',user)
	// console.log('props in home', props)

	return (
		<Container>
			<h2>Home Page</h2>
			<GoalsIndex msgAlert={msgAlert}/>
		</Container>
	)
}

export default Home
