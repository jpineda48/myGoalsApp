import apiUrl from '../apiConfig'
import axios from 'axios'


export const createAction = (goalId, newAction) => {
    return axios({
        url: `${apiUrl}/actions/${goalId}`,
        method:'POST',
        data:{ action: newAction}

    })
}
export const updateAction = (user, goalId, updatedAction) => {
    return axios({
        url: `${apiUrl}/actions/${goalId}/${updatedAction._id}`,
        method:'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ action: updatedAction}

    })
}


export const removeAction = (user, goalId, actionId)=> {
    return axios({
        url: `${apiUrl}/actions/${goalId}/${actionId}`,
        method: `DELETE`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}