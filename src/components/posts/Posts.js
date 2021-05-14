import {useState} from "react";
import axiosInstance from '../../services/api';
import {useEffect} from "react";
import Post from "./Post";
import './Posts.css'

export default function Posts() {


    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPost([...value.data]));
    }, []);

    let [posts, setPost] = useState([])
    let [singlePosts, setSinglePosts] = useState(null)

    const findPost=(id)=>{
    let finder=posts.find(value => value.id===id)
    setSinglePosts(finder)
    }
    return (
        <div>
            <div>
                {
                    singlePosts ?(<div>
                        <h4>Post id: {singlePosts.id}</h4>
                        <p>Title: {singlePosts.title}</p>
                        <p>Body: {singlePosts.body}</p>
                    </div>): (<h1>no post</h1>)
                }
            </div>
            <div>{
                posts.map((value) => <Post key = {value.id} value={value} findSinglePost = {findPost}/>)
            }</div>

        </div>

    );

}