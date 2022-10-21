import React from "react";
import Post from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";


let postsMessage = [
  {id:1, postText:"Hi!", named:"GG WP"},
  {id:2, postText:"Hi", named:"Nurlan"},
] 
const posts = postsMessage.map( p => {
  <Post postText={p.postText} named={p.named} id={p.id}/>
})

const Profile = () => (
  <div className="profile">
    <ProfileInfo
     contentImg="https://trello.com/1/cards/634646cac516900016520734/attachments/634646cbc516900016520755/previews/634646ccc51690001652077a/download/image.png"
     contentMiniImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOfDm8qapZxue7bvqXhpwCm3Qdc8ksKzlpsHlN8Vtk0KNgjUwuOt-_FNjz4d_ayVD1Uw&usqp=CAU"s
    />
    {posts}
  </div>
);

export default Profile;

