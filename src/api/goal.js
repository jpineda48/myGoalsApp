import apiUrl from '../apiConfig'
import axios from 'axios'


//index
export const getAllGoals = (user) => {
    return axios({
        url:`${apiUrl}/goals`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
        })
}

export const getOneGoal = (user, id) => {
    return axios({
        url: `${apiUrl}/goals/${id}`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }     
    })

}

export const createGoal = (user, newGoal) => {
    return axios({
        url: `${apiUrl}/goals`,
        method:'POST',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ goal: newGoal}

    })
}
export const updateGoal = (user, updatedGoal) => {
    return axios({
        url: `${apiUrl}/goals/${updatedGoal._id}`,
        method:'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ goal: updatedGoal}

    })
}


export const removeGoal = (user, goalId)=> {
    return axios({
        url: `${apiUrl}/goals/${goalId}`,
        method: `DELETE`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}


