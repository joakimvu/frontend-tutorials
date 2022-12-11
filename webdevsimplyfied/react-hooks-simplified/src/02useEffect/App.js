import { useState, useEffect } from "react";

function App() {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // console.log("render");

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  //   return () => {
  //     console.log("returns from resource change");
  //   };
  // }, [resourceType]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>{windowWidth}</div>
    // <>
    //   <div>
    //     <button onClick={() => setResourceType("posts")}>Posts</button>
    //     <button onClick={() => setResourceType("users")}>Users</button>
    //     <button onClick={() => setResourceType("comments")}>Comments</button>
    //   </div>
    //   <h1>{resourceType}</h1>
    //   {items?.map((item) => {
    //     return <pre key={item.id}>{JSON.stringify(item)}</pre>;
    //   })}
    // </>
  );
}

export default App;
