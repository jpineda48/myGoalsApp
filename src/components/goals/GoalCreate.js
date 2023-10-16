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
        <>
        <br/>
        <h1 style={{textAlign:'center',fontFamily:'PT Serif, serif'}}>My Goals</h1>
        <p style={{textAlign:'center', padding:'20px', fontSize:'20px'}}>Having goals helps <span style={{fontStyle: 'italic', color:'orange'}}>focus</span>  attention on the things that are <span style={{fontStyle: 'italic', color:'orange'}}>important</span> .<br/>
         It allows us to <span style={{fontStyle: 'italic', color:'orange'}}>create a vision</span>  of how we would like our life to be, <br/>increase the amount of time and effort we spend on an activity, and develop <span style={{fontStyle: 'italic', color:'orange'}}>effective</span>  achievement stratagies.</p>
		<hr/>        
        <br/>
        <br/>
        <GoalForm 
        goal={goal} 
        handleChange={onChange} 
        handleSubmit={onSubmit}
        heading="Add A Goal"
        />
        </>
    )

}

export default GoalCreate