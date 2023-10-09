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



