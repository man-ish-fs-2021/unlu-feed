import { useEffect, useState } from "react";
import { PostList, Navbar } from "./index";

const App = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch(
      "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e"
    );
    const data = await response.json();
    console.log("Data", data);
    setData(data);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div>
        <PostList {...data} />
      </div>
    </div>
  );
};

export default App;
