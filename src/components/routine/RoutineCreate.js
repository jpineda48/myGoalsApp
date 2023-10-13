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
        .then(res => { navigate(`/routine/${res.data.routine._id}`)})
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
        <small className='m-4'>Knowing your values and setting clear goals based on those values will help you live more intentionally. </small>
        <br/>
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