import axios from 'axios'
import { API_DOMAIN, LOCAL_API_DOMAIN } from '../constant'

const apiDomain = PRODUCTION ? API_DOMAIN : LOCAL_API_DOMAIN

const getArticle = (url) => {
  return axios
    .get(`${apiDomain}/api/article?url=${url}`)
    .then((res) => res.data.results)
}

export default {
  getArticle
}
