import apiUrl from '../apiConfig'
import axios from 'axios'


//index
export const getAllGoals = () => {
    return axios(`${apiUrl}/goals`)
}