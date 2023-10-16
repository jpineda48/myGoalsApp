import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'black',
    textDecoration: 'none'
	
}


const authenticatedOptions = (
	<>
		
		<Nav.Item className='m-3'>
			<Link to='create-goal' style={linkStyle}>
				SET A GOAL
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='moods' style={linkStyle}>
				INSPIRATION
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='routine' style={linkStyle}>
				ADD TO YOUR ROUTINE
			</Link>
		</Nav.Item>
		
		<Nav.Item className='m-3'>
			<Link to='journal' style={linkStyle}>
				JOURNAL
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='change-password' style={linkStyle} >
				CHANGE PASSWORD
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='sign-out' style={linkStyle}>
				SIGN OUT
			</Link>
		</Nav.Item>
		
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-3'>
		    <Link to='sign-up' style={linkStyle}>SIGN UP</Link>
        </Nav.Item>
        <Nav.Item className='m-3'>
		    <Link to='sign-in' style={linkStyle}>SIGN IN</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-3'>
			<Link to='/' style={linkStyle}>
				HOME
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar style={{textAlign:'center', backgroundColor:'white' }} variant='dark' expand='md'>
	
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='m-auto' >
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>

)

export default Header
