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
  
        <div className='m-2 rounded-1 mb-5' style={{width:'30%',backgroundColor:'#fdf86d', backgroundImage: 'linear-gradient(315deg, #fdf86d 0%, #bddcf1 74%)'}}>
            <h4 className="m-3" style={{fontStyle: 'italic'}}>{entry.title }</h4>
            <h5 className="m-3">{(new Date(entry.createdAt)).toDateString()}</h5>
            <Link className="m-3 border border-black p-1" style={{textDecoration:'none', color:'black'}} to= {`/journal/${entry._id}`} >
                    VIEW ENTRY
                     </Link>
                     
        </div>
      
      
      
        // <Card key= {entry._id} style={{width:'30%', margin:5}}>
        //     <Card.Header> {entry.title }<br/>{(new Date(entry.createdAt)).toDateString()}  </Card.Header>
        //     <Card.Body>
        //         <Card.Text>
        //             <Link to= {`/journal/${entry._id}`} >
        //             view {entry.title}
        //             </Link>
        //         </Card.Text>
        //     </Card.Body>
               
            
        // </Card>
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