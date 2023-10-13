import apiUrl from '../apiConfig'
import axios from 'axios'


//index
export const getAllRoutines = (user) => {
    return axios({
        url:`${apiUrl}/routine`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
        })
}

export const getOneRoutine = (user, id) => {
    return axios({
        url: `${apiUrl}/routine/${id}`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }     
    })

}

export const createRoutine = (user, newRoutine) => {
    return axios({
        url: `${apiUrl}/routine`,
        method:'POST',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ routine: newRoutine}

    })
}
export const updateRoutine = (user, updatedRoutine) => {
    return axios({
        url: `${apiUrl}/routine/${updatedRoutine._id}`,
        method:'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ routine: updatedRoutine}

    })
}


export const removeRoutine = (user, routineId)=> {
    return axios({
        url: `${apiUrl}/routine/${routineId}`,
        method: `DELETE`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
