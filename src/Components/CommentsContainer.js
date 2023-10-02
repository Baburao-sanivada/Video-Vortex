import { user_icon } from "../utils/paths";
import { comments } from "../utils/MockCommentsData";


const CommentItem=({data})=>{
    const {name,text,replies}=data;
    console.log(data)
    return <div className="flex p-2 m-2 bg-gray-50">
        <img className="h-12" alt="user-icon" src={user_icon}/>
        <div className="px-2">
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentList=({comments})=>{
    
    return <div>
        {
            comments.map((comment)=>{
                return <div>
                    <CommentItem data={comment}/>
                    <div className="pl-5 ml-2 border border-l-black">
                        <CommentList comments={comment.replies}/>
                    </div>
                    </div>
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