import React from "react";

export default (props) => {
  return (
    <div>
      {props.result === "pass" ? (
        <img
          src={process.env.PUBLIC_URL + "/pictures/pass.png"}
          alt=""
          style={{ width: "90%", height: "80%" }}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/pictures/fail.png"}
          alt=""
          style={{ width: "90%", height: "80%" }}
        />
      )}
    </div>
  );
};
