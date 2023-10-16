// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import ShowGoal from './components/goals/GoalShow'
import GoalCreate from './components/goals/GoalCreate'
import EntriesIndex from './components/Journal/Entries_Index'
import EntryShow from './components/Journal/EntryShow'
import RoutineCreate from './components/routine/RoutineCreate'
import ShowRoutine from './components/routine/RoutineShow'
import ImageUpload from './components/Images/ImageUpload'



const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  useEffect(() => {
	const loggedInUser= localStorage.getItem('user')
	if (loggedInUser) {
		const foundUser = JSON.parse(loggedInUser)
		console.log('founduser', foundUser)
		setUser(foundUser)
	}
  }, [])
//   console.log('user in app', user)
//   console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
	localStorage.removeItem('user')
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
				<Fragment>
					<h1 style={{textAlign:'center', padding:'20px', fontFamily:'PT Serif, serif', fontSize:'60px'}}>MyGoals</h1>
					<hr/>
					{/* {user && (
					<span className='navbar-text' style={{fontSize:'1rem', color:'black',}}>Welcome, {user.email}</span>
				)} */}
					<Header user={user} />
						<Routes>
							<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
							<Route
								path='/sign-up'
								element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
								/>
							<Route
								path='/sign-in'
								element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
								/>
							<Route
								path='/sign-out'
								element={
								<RequireAuth user={user}>
								<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
								</RequireAuth>
								}
								/>
							<Route
								path='/change-password'
								element={
								<RequireAuth user={user}>
								<ChangePassword msgAlert={msgAlert} user={user} />
								</RequireAuth>}
								/>
							<Route path='/create-goal' element={
								<RequireAuth user={user}>
								<GoalCreate user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
							<Route path='goals/:id' element={
								<RequireAuth user={user}>
								<ShowGoal user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
							<Route path='journal' element={
								<RequireAuth user={user}>
								<EntriesIndex user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
							<Route path='journal/:id' element={
								<RequireAuth user={user}>
								<EntryShow user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
								<Route path='routine' element={
								<RequireAuth user={user}>
								<RoutineCreate user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
								<Route path='routine/:id' element={
								<RequireAuth user={user}>
								<ShowRoutine user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
								<Route path='moods' element={
								<RequireAuth user={user}>
								<ImageUpload user={user} msgAlert={msgAlert}/>
								</RequireAuth>}

								/>
								
								
						</Routes>
						{msgAlerts.map((msgAlert) => (
						<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
						/>
					))}
					
				</Fragment>
			)
}

export default App
