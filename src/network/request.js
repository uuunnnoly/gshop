import axios from "axios";

export function request(config){
  const instance = axios.create({
    baseURL:'http://localhost:4000',
    timeout:5000
  })
  return instance(config)
}
