import { useState } from 'react'
import { createEntry } from '../../api/journal'
import { createGoalFailure, createGoalSucess } from '../shared/AutoDismissAlert/messages'
import EntryForm from '../shared/EntryForm'
import { useNavigate } from 'react-router-dom'


const EntryCreate = (props) => {
    const {user, msgAlert} = props

    const navigate = useNavigate()

    const [entry, setEntry] = useState({
        title: '',
        body:''
    })

    const onChange = (e) => {
    e.persist()
    setEntry(prevEntry => {
        const updatedName= e.target.name
        const updatedValue= e.target.value

        const updatedEntry = {[updatedName ]: updatedValue}
        return{
            ...prevEntry, ...updatedEntry
        }
    })
   
 }
 console.log('this is user in enrtycreate',user)
 const onSubmit = (e) => {
    e.preventDefault()
    createEntry(user, entry)
        .then(res => { navigate(`/journal/${res.data.entry._id}`)})
        .then(() => {
            msgAlert({
                heading: 'Goal Created!',
                message: createGoalSucess,
                variant: 'success'
            })
        })
        .catch(()=>{
            msgAlert({
                heading: 'Oh No!',
                message: createGoalFailure,
                variant: 'danger'
            })
        })


 }
    return(
        <>
        <br/>
        <h1 style={{textAlign:'center',fontFamily:'PT Serif, serif'}}>My Journal</h1>
        <p style={{textAlign:'center', padding:'20px', fontSize:'20px'}}>Through <span style={{fontStyle: 'italic', color:'pink'}}>reflection</span> and <span style={{fontStyle: 'italic', color:'pink'}}>introspection</span>, <br/>
        journaling helps you to get to know yourself better</p>
					<hr/>
        
        <br/>
        <br/>
        <br/>
        <EntryForm 
        entry={entry} 
        handleChange={onChange} 
        handleSubmit={onSubmit}
        heading="add a new goal"
        />
        </>
    )

}

export default EntryCreate