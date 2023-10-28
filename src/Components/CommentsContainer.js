import { comments } from "../utils/MockCommentsData";
import { BiUserCircle } from "react-icons/bi";


const CommentItem=({data})=>{
    const {name,text,replies}=data;
    return <div className="flex p-2 m-2 bg-gray-50 dark:bg-slate-800 dark:text-white">
        <BiUserCircle className=" dark:bg-slate-800 text-2xl" alt="user-Icon" />
        <div className="px-2">
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentList=({comments})=>{
    
    return <div>
        {
            comments.map((comment,index)=>{
                return (<div key={index}>
                    <CommentItem data={comment}/>
                    <div  className="pl-5 ml-2 border border-l-black">
                        <CommentList  comments={comment.replies}/>
                    </div>
                    </div>)
            })
        }
    </div>
}
export const CommentsContainer=()=>{
    return <div>
        <h1 className="font-bold p-2 m-2 text-2xl"> Comments:</h1>
        <CommentList comments={comments}/>
    </div>
}