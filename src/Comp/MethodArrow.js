import React from "react";

const MethodArrow = () => {
  let obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
      console.log(this.i, this);
    },
  };

  obj.b();
  obj.c();
  return <div></div>;
};

export default MethodArrow;
