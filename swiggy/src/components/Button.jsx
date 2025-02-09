import React from "react";

function Button({ label, icon: Icon }) {
  return (
    <div className="border rounded-3xl p-2 px-4 cursor-pointer hover:bg-gray-100 ">
      {label}
      {Icon && <Icon className="inline ml-2" />}
    </div>
  );
}

export default Button;
