import axios from 'axios'

export const signin = async(id:string, pwd:string) =>{
    const response = await axios.post('http://localhost:1337/api/auth/local',{
        "identifier": id,
        "password" : pwd,
    })

    return response
}

 
//로그인 로직을 page에다 두는건 좀 아니여서 여기로 옮긴거다
