import React from "react";
import "../styles/StyleNoContents.css";
function NoContents(props) {
  const {text} = props;

  return (
        <div className="nocontents-text">
          <span className="nocontents-text-span">등록된 {text} 이/가 없습니다.</span>
        </div>
  );
}

export default NoContents;