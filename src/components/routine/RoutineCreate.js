import { useState } from 'react'
import { createRoutine } from '../../api/routine'
import { createGoalFailure, createGoalSucess } from '../shared/AutoDismissAlert/messages'
import RoutineForm from '../shared/RoutineForm'
import { useNavigate } from 'react-router-dom'


const RoutineCreate = (props) => {
    const {user, msgAlert} = props

    const navigate = useNavigate()

    const [routine, setRoutine] = useState({
        task: '',
        time_of_day: ''
    })

    const onChange = (e) => {
    e.persist()
    setRoutine(prevRoutine=> {
        const updatedName= e.target.name
        const updatedValue= e.target.value

        const updatedRoutine = {[updatedName ]: updatedValue}
        return{
            ...prevRoutine, ...updatedRoutine
        }
    })
 }
 const onSubmit = (e) => {
    e.preventDefault()
    createRoutine(user, routine)
        .then(res => { navigate(`/`)})
        .then(() => {
            msgAlert({
                heading: 'Action Created!',
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
        <h1 style={{textAlign:'center',fontFamily:'PT Serif, serif'}}>My Routine</h1><br/>
        <p style={{textAlign:'center', padding:'20px', fontSize:'20px'}}>Having a routine helps keep us <span style={{fontStyle: 'italic', color:'teal'}}>on track</span>  both mentally and physically, <br/>
        which can help make our days more <span style={{fontStyle: 'italic', color:'teal'}}>positive</span> and <span style={{fontStyle: 'italic', color:'teal'}}>productive</span></p>
					<hr/>
        <br/>
        <br/>
        <RoutineForm
        routine={routine} 
        handleChange={onChange} 
        handleSubmit={onSubmit}
        heading="add a new task"
        />
        </>
    )

}

export default RoutineCreate