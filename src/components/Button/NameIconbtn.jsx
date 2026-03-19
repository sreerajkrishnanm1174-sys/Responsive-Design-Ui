import React from "react";

function NameIconbtn({className ,icon,name,onClick}) {
  return (
    <button className={`flex items-center gap-2 px-8 py-4 rounded ${className}`} onClick={onClick}>
      <span>{name}</span>
      <span>{icon}</span>
    </button>
  );
}

export default NameIconbtn;
