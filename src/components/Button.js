import React from 'react';
import '../styles/StyleButton.css';

function Button({ onClick, value }) {
  return (
    <div>
      <button className={"Button"}
              onClick={onClick}
              type={"submit"}>
        {value}
      </button>
    </div>
  );
}

export default Button;
