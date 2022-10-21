import React from 'react'

const Post = (props) => {
    console.log(props.named)
    
return(

    <div>
        <span>{props.postText}</span>        <span>{props.named}</span>

    </div>
)}
export default Post