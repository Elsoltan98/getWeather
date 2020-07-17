import React, { useContext } from "react";
import Context from "../Context";

const Error = () => {
  const { error } = useContext(Context);
  return (
    <div className="error">
      <h1>{error}</h1>
    </div>
  );
};

export default Error;
