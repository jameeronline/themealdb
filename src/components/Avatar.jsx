import React from "react";

import avatar1 from "src/assets/avatar-1.png";
import avatar2 from "src/assets/avatar-2.png";
import avatar3 from "src/assets/avatar-3.png";
import avatar4 from "src/assets/avatar-4.png";
import avatar5 from "src/assets/avatar-5.png";
import avatar6 from "src/assets/avatar-6.png";
import avatar7 from "src/assets/avatar-7.png";
import avatar8 from "src/assets/avatar-8.png";

function Avatar({ item, ...props }) {
  const getAvatar = () => {
    switch (item) {
      case 1:
        return avatar1;
      case 2:
        return avatar2;
      case 3:
        return avatar3;
      case 4:
        return avatar4;
      case 5:
        return avatar5;
      case 6:
        return avatar6;
      case 7:
        return avatar7;
      case 8:
        return avatar8;
    }
  };

  return (
    <>
      <img src={getAvatar()} alt="avatar" {...props} />
    </>
  );
}

export default Avatar;
