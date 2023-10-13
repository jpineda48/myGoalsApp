import { getAllEntries } from "../../api/journal";
import { useState, useEffect } from "react";
import {Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen';
import EntryCreate from "./EntryCreate";


const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'

}

const EntriesIndex = (props) => {
    const { user } = props
    const [entries, setEntries] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    console.log('entries in journal index', entries )

    const navigate = useNavigate()


    useEffect(() => {
        getAllEntries(user)
            .then(res => {
                console.log('the entries', res.data.entries)
                setEntries(res.data.entries)
            }) 
            .catch(err => {
                msgAlert({
                    heading: 'error getting goals',
                    message: messages.indexGoalsFailure,
                    variant:'danger'
                })
                setError(true)
            })
    }, [])
    // const date = ()=>{
    //     const date = entry.createdAt
    //     const newDate =(new Date(date)).toDateString()
    //     console.log('this is new date', newDate)
    //     return newDate
    // }

    if(!user) {
        navigate('/')
    }
    if(error) {
        return <LoadingScreen/>
    } if (!entries) {
        return <LoadingScreen/>
    } 

    const entryCards = entries.map(entry => (
        <Card key= {entry._id} style={{width:'30%', margin:5}}>
            <Card.Header> {(new Date(entry.createdAt)).toDateString()} <br/>{entry.title } </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to= {`/journal/${entry._id}`} className='btn btn-info'>
                    view {entry.title}
                    </Link>
                </Card.Text>
            </Card.Body>
               
            
        </Card>
    ))
    
    
    return (
        <>
       
       <EntryCreate msgAlert={msgAlert} user={user}/>
        <div className="container-md" style={cardContainerLayout}>

            {entryCards}

        </div>
        </>
    )
}

export default EntriesIndex