import { NextPage } from "next";
import { MDViewer } from "../../components/MDViewer";
import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher";
import { PostData } from "../../types/Post";
import { useMemeber } from "../../hooks/useMember";
import Link from "next/link";

const PostPage: NextPage = () =>{
    const { data, error } = useSWR('http://localhost:1337/api/posts/', fetcher);
    const { userData, loggedIn } = useMemeber();
    console.log(loggedIn)
    console.log(userData)

    if(error) return(<div>ERR</div>)
    if(!data) return(<div>Loading..</div>)
    console.log(data.data)

    return (
        <div>
            {userData && <div>
                <Link href="/write/">
                    <a >글쓰끼</a>    
                </Link> 
            </div>}
            {data.data.map((postData:PostData)=>{
                return(
                    <MDViewer 
                        key={`post-${postData.id}`}
                        author={postData.attributes.author}
                        Title={postData.attributes.Title}
                        Contents={postData.attributes.Contents} 
                    />
                )
            })}
        </div>
    )
}

export default PostPage