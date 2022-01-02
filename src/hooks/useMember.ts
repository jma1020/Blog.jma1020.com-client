import useSWR from 'swr';
import axios from 'axios'

const fetcher = (url:string) => {
    const JWT_TOKEN = document.cookie.split(" ").filter((key)=> {
        if(key.match('jwt') !==null) return key
    }).join('').replace('jwt=','');

    return axios.get(url,{
        headers: {
            Authorization: `Bearer ${JWT_TOKEN}`
        }
    }).then(res => res.data)

    //이거 야매방법으로 일단 하셨다!!
}

export const useMemeber = () => {
    const { data, error} = useSWR('http://localhost:1337/api/users/me', fetcher)

    return {
        loggedIn: !!data,
        userData: data
    }
}