import GoalsIndex from "./goals/GoalsIndex"
import RoutineIndex from "./routine/RoutineIndex"
import { Link } from 'react-router-dom'
import HomePage from "./homePage/HomePage"


import {Container} from 'react-bootstrap'


const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row',
    justifyContent: 'center',
	fontFamily: 'Poppins, sans-serif'
	

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
		<Container className="m-2 border border-black" style={{textAlign: 'left'}}>
			<p style={{fontStyle: 'italic', fontSize: '15px'}}> Having a routine helps keep us on track both mentally and physically, which can help make our days more positive and productive</p>
			<h2 style={{fontSize:'2rem'}}>My Daily Routine <span style={{fontSize: '15px', fontWeight: 'bold'}}><br/>{n}</span></h2>
			<RoutineIndex msgAlert={msgAlert} user={user}/>
			<button className="m-4" ><Link to='routine' style={{textDecoration:'none'}}>
				Add to My Routine
			</Link></button>
		</Container>
		
		<Container className="m-2 border border-black" style={{textAlign: 'left'}}>
			
			<h2 style={{fontSize:'2rem'}}>My Goals</h2>
			<GoalsIndex msgAlert={msgAlert} user={user}/>
		</Container>
		</div>
	) 
	
}

export default Home
