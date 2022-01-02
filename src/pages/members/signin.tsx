import { NextPage } from "next";
import React, { useState } from "react";
import axios from 'axios'
import { signin } from "../../utils/auth";
import { useCookies } from 'react-cookie'
import { useRouter } from "next/router";

const SignInPage: NextPage = () => {
    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd] = useState('')
    const [cookies,setCookie] = useCookies(['jwt'])
    const router = useRouter()

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }

    const handlePwdChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPwd(e.target.value)
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const response = await signin(email,pwd)
        
        setCookie('jwt',`${response.data.jwt}`,{path:'/'})
       router.push('/posts')
        // document.cookie = `jwt=Bearer ${response.data.jwt}; path=/`



        //이 밑에껀 이제 필요없다 useMember로 이동 
        const userData = await axios.get('http://localhost:1337/api/users/me', {
            headers: {
                Authorization: `Bearer ${response.data.jwt}`
            }
        })
        console.log(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="uid">
                        이메일
                    </label>
                    <input 
                        type="email" 
                        placeholder="Email"
                        id="uid"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">
                        비밀번호
                    </label>
                    <input 
                        type="password" 
                        id="pwd"
                        value={pwd}
                        onChange={handlePwdChange}
                    />
                </div>
                <button>로그인</button>
            </form>
        </div>
    )
}

export default SignInPage