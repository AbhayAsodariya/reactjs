import React, { useState } from "react";

const beforecss = {
  background: "white",
  color: "black",
};
const aftercss = {
  background: "black",
  color: "white",
};

function AddToDo({ onAddToDo }) {
  const [title, setTitle] = useState("");
  const [css, setcss] = useState(beforecss);
  return (
    <div>
      {/* {title} */}

      <input
        style={{
          background: "lightblue",
        }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        style={css}
        className="btn"
        onClick={() => {
          setTitle("");
          if (css == beforecss) {
            setcss(aftercss);
          } else {
            setcss(beforecss);
          }
          onAddToDo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddToDo;
