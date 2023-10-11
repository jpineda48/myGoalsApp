import {useState} from 'react'
import{Card, Button} from 'react-bootstrap'

const ActionShow = (props) => {
    return (
        <>
        <Card className='m-2'>
            <Card.Header>
                {props.action.action}
                <Card.Body>

                </Card.Body>
            </Card.Header>

        </Card>
        </>
    )
}

export default ActionShow