import GoalsIndex from "./goals/GoalsIndex"
import RoutineIndex from "./routine/RoutineIndex"
import { Link } from 'react-router-dom'
import HomePage from "./homePage/HomePage"


import {Container} from 'react-bootstrap'


const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row',
    justifyContent: 'center',

	

}

const Home = (props) => {
	
	const { msgAlert, user } = props
	const date = new Date();
	const n = date.toDateString();
	
	console.log('this is user in home',user)
	// console.log('props in home', props)
	if (user === null) {
		return <HomePage/>
	}
	return (
		<div className='container-md' style={cardContainerLayout}>
			<div style={{backgroundColor:'teal', width:'30px'}}></div>
		<Container className="m-2 " style={{textAlign: 'left'}}>
			
			<h2 style={{fontSize:'2rem', fontFamily:'PT Serif, serif'}}>My Daily Routine <span style={{fontSize: '15px', fontWeight: 'bold'}}><br/>{n}</span></h2>
			<hr/>
			<RoutineIndex msgAlert={msgAlert} user={user}/>
		
		</Container>
		<div style={{backgroundColor:'salmon', width:'30px'}}></div>
		<Container className="m-2 " style={{textAlign: 'left'}}>

			<h2 style={{fontSize:'2rem', fontFamily:'PT Serif, serif'}}>My Goals</h2>
			<hr/>
			<GoalsIndex msgAlert={msgAlert} user={user}/>
		</Container>
		</div>
	) 
	
}

export default Home
