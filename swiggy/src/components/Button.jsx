import React from "react";

function Button({ label, icon: Icon }) {
  return (
    <div className="border rounded-2xl p-1 px-2 cursor-pointer hover:bg-gray-100 ">
      {label}
      {Icon && <Icon className="inline ml-2" />}
    </div>
  );
}

export default Button;
