import React from "react";
import "../styles/NoContents.css";
function NoContents(props) {
  const {text} = props;

  return (
    <div className="nocontents-element">
      <div className="nocontents-container">
        <div className="nocontents-text">
          <span>등록된 {text} 이/가 없습니다.</span>
        </div>
      </div>
    </div>
  );
}

export default NoContents;