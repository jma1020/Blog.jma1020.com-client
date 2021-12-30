import { NextPage } from "next";
import { MDViewer } from "../../components/MDViewer";
import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher";
import { PostData } from "../../types/Post";


const PostPage: NextPage = () =>{
    const { data, error } = useSWR('http://localhost:1337/api/posts/', fetcher)

    if(error) return(<div>ERR</div>)
    if(!data) return(<div>Loading..</div>)
    console.log(data.data)

    return (
        <div>
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