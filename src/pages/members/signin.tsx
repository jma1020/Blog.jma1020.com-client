import { NextPage } from "next";
import React, { useState } from "react";
import axios from 'axios'
import { signin } from "../../utils/auth";

const SignInPage: NextPage = () => {
    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd] = useState('')

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }

    const handlePwdChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPwd(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        signin(email,pwd).then((res)=>{
            console.log(res)
        })
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