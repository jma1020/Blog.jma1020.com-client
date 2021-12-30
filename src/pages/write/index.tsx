import { NextPage } from "next";
import React, { useState } from "react";
import axios from 'axios'

const write = (title: string , post: string) => {
    axios.post('http://localhost:1337/api/posts/',{
        "data": {
            "author" : "김쩡",
            "Title" : title,
            "Contents" : post,
        }
    }).then((res) => {
        if(res.status===200) {
            location.href = '/posts'
            //이런거 라우터로 해도 된다
        }
    }) 
}

const WritePage:NextPage =() => {
    const [ title, setTitle ] =useState('')
    const [ post, setPost] = useState('')

    const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
    }

    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value) 
    }

    const handleSubmnit = (e:React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
        write(title, post)
    }

    return(
        <div>
            <h1>글 작성</h1>
            <form onSubmit={handleSubmnit}>
                <input type="text" onChange={handleTitleChange} value={title}/>
                <textarea onChange={handleTextAreaChange} value={post}  />
                <button type="submit">발행하기 </button>
            </form>
        </div>
    )
}

export default WritePage