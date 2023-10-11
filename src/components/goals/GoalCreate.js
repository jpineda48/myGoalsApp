import { useState } from 'react'
import {createGoal } from '../../api/goal'
import { createGoalFailure, createGoalSucess } from '../shared/AutoDismissAlert/messages'
import GoalForm from '../shared/GoalForm'
import { useNavigate } from 'react-router-dom'


const GoalCreate = (props) => {
    const {user, msgAlert} = props

    const navigate = useNavigate()

    const [goal, setGoal] = useState({
        catagory: '',
        title: '',
        progress_measurement: '',
        description: '',
        status: ''
    })

    const onChange = (e) => {
    e.persist()
    setGoal(prevGoal => {
        const updatedName= e.target.name
        const updatedValue= e.target.value

        const updatedGoal = {[updatedName ]: updatedValue}
        return{
            ...prevGoal, ...updatedGoal
        }
    })
 }
 const onSubmit = (e) => {
    e.preventDefault()
    createGoal(user, goal)
        .then(res => { navigate(`/goals/${res.data.goal._id}`)})
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
        <GoalForm 
        goal={goal} 
        handleChange={onChange} 
        handleSubmit={onSubmit}
        heading="add a new goal"
        />
    )

}

export default GoalCreate