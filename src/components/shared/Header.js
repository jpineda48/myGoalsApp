import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
	
}


const authenticatedOptions = (
	<>
		<Nav.Item className='m-3'>
			<Link to='change-password' style={linkStyle} >
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='create-goal' style={linkStyle}>
				Create Goal
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='routine' style={linkStyle}>
				Create Routine
			</Link>
		</Nav.Item>
		
		<Nav.Item className='m-3'>
			<Link to='journal' style={linkStyle}>
				My Journal
			</Link>
		</Nav.Item>
		<Nav.Item className='m-3'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-3'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='m-3'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-3'>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar style={{backgroundColor:'rgba(22, 96, 124, 1)' }} variant='dark' expand='md'>
		<Navbar.Brand className='m-4'>
            <Link to='/' style={{color: 'white', fontFamily:'DM Serif Display serif', fontSize: '4rem', textDecoration:'none', lineHeight: '0'}}>
                MyGoals <br/>
				{user && (
					<span className='navbar-text' style={{fontSize:'1rem'}}>Welcome, {user.email}</span>
				)}
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
