import {useState,useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
     try{
      async function fetchData() {
        const response = await fetch(url);
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        const data = await response.json();
        
        console.log("Data", data);
        setData(data);
        setLoading(false);
      }
      fetchData();
     }catch(error){
       console.log(error);
     }
    }, [url]);
    return { data, loading };
  };