import { useState } from "react";
import { useEffect } from "react";

function Hooks() {
  const x = [
    { id: 1, title: "Apple" },
    { id: 1, title: "Apple" },
    { id: 1, title: "Apple" },
  ];

  const [t, setT] = useState([]);
  useEffect(() => {
    setT(x);
    //     console.log(t);
  }, []);
  return (
    <div>
      {t.map((i) => {
        return i.title;
      })}
      {/* {t[0].id}     */}
      {/* {x.id} */}
    </div>
  );
}

export default Hooks;
