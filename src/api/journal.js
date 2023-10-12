import apiUrl from '../apiConfig'
import axios from 'axios'


//index
export const getAllEntries = (user) => {
    return axios({
        url:`${apiUrl}/journal`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
        })
}

export const getOneEntry = (user, id) => {
    return axios({
        url: `${apiUrl}/journal/${id}`,
        method:'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }     
    })

}

export const createEntry = (user, newEntry) => {
    return axios({
        url: `${apiUrl}/journal`,
        method:'POST',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ entry: newEntry}

    })
}
export const updateEntry = (user, updatedEntry) => {
    return axios({
        url: `${apiUrl}/journal/${updatedEntry._id}`,
        method:'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`

        },
        data:{ entry: updatedEntry}

    })
}


export const removeEntry = (user, entryId)=> {
    return axios({
        url: `${apiUrl}/journal/${entryId}`,
        method: `DELETE`,
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
