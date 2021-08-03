import { useEffect ,useState } from "react"
import './App.css'
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      handleFetch()
  }, [])

  const handleFetch = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/');
      if (response.status !== 200) throw new Error(`${response.status}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  if (error) <h1>Error.</h1>;
  else if (loading) <h1>Loading...</h1>;
  return (
    <div>
      <h1>{data.value}</h1>
      <button onClick={handleFetch}>click me</button>
    </div>
  );
};

export default App