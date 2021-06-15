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
  const [url, setUrl] = useState(
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  const { data, loading } = useFetch(url);
  return (
    <div className="App">
      <Navbar />
      {loading ? <div>Loading</div> : <PostList {...data} />}
      <div className="pagination">
        <div className="pagination-container">
          <div
            className="pagination-cell"
            onClick={() =>
              setUrl("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
            }
          >
            1
          </div>
          <div
            className="pagination-cell"
            onClick={() =>
              setUrl("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
            }
          >
            2
          </div>
          <div
            className="pagination-cell"
            onClick={() =>
              setUrl("http://www.mocky.io/v2/59ac293b100000d60bf9c239")
            }
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
