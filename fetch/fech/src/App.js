import logo from "./logo.svg";
import "./App.css";

function App() {
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let x = document.getElementById("d1");
        let html = "";
        data.map((v) => {
          html =
            html +
            `
            <img src="${v.url}" alt="" height="100px"/>
          `;
        });

        x.innerHTML = html;
      });
  };
  return (
    <>
      <button onClick={fetchData}>click</button>
      <div id="d1"></div>
      
    </>
  );
}

export default App;
