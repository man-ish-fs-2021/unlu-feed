import { useEffect, useState } from "react";
import { PostList, Navbar } from "./index";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data", data);
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, loading };
};
const App = () => {
  const { data, loading } = useFetch(
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e"
  );
  return (
    <div className="App">
      <Navbar />
      {loading ? <div>Loading</div> : <PostList {...data} />}
      <div className="pagination"></div>
    </div>
  );
};

export default App;
