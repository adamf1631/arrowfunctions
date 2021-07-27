import React from "react";

const Numbers = () => {
  let num = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {num.map((n) => (
        <>
          <ul>
            <li>{n}</li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default Numbers;
