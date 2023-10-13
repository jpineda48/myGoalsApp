import GoalsIndex from "./goals/GoalsIndex"
import RoutineIndex from "./routine/RoutineIndex"

import {Container} from 'react-bootstrap'


const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row',
    justifyContent: 'center'
	

}

const Home = (props) => {
	
	const { msgAlert, user } = props
	console.log('this is user in home',user)
	// console.log('props in home', props)
	if (user === null) {
		return <p>SIGN IN </p>
	}
	return (
		<div className='container-md' style={cardContainerLayout}>
		<Container className="m-2 border border-primary" style={{textAlign: 'center'}}>
			<h2 style={{fontSize:'2rem'}}>My Routine</h2>
			<RoutineIndex msgAlert={msgAlert} user={user}/>
		</Container>
		
		<Container className="m-2 border border-primary" style={{textAlign: 'center'}}>
			<h2 style={{fontSize:'2rem'}}>My Goals</h2>
			<GoalsIndex msgAlert={msgAlert} user={user}/>
		</Container>
		</div>
	) 
	
}

export default Home
