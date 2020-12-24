import axios from 'axios'
import { API_DOMAIN, LOCAL_API_DOMAIN } from '../constant'

const apiDomain = PRODUCTION ? API_DOMAIN : LOCAL_API_DOMAIN

const getPagesByCategory = (category) => {
  return axios.get(`${apiDomain}/api/pages/${category}`).then((res) => res.data.results)
}

export default {
  getPagesByCategory
}