import { useEffect, useState } from "react";
import { PostList, Navbar,Loading,Pagination } from "./index";
import {useFetch} from './useFetch';


const App = () => {
  
  const [url, setUrl] = useState(
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  const sendUrl = (url)=>{
    setUrl(url);
  }
  const { data, loading } = useFetch(url);
  return (
    <div className="App">
      <Navbar />
      {loading ? (<Loading/>) :(<div> {(data && data.posts.length!==0)?<PostList {...data} />:<p>No posts found</p>} </div> )}
      {loading?null:<Pagination sendUrl={sendUrl} />}
    </div>
  );
};

export default App;
