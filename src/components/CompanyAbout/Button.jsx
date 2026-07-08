import React from "react";

const Button = ({ Content, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {Content}
    </button>
  );
};

export default Button;

