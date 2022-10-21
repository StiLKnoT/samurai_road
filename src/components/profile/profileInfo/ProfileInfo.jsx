import React from "react";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        className="content_img_main"
        src={props.contentImg}
      />
      <img src={props.contentMiniImg} />
    </div>
  );
};

export default ProfileInfo;
