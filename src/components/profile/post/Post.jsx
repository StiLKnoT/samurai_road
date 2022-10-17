import React from 'react'

const Post = (props) => {
    console.log(props.named)
    
return(

    <div>
        <h2>{props.postText}</h2>
        <span>{props.named}</span>
    </div>
)}
export default Post