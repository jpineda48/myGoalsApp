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



