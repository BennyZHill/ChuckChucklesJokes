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
      const response = await fetch('https://api.chucknorris.io/jokes/random');
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
    <div className = 'joke-container'>
      <h1>CHUCKS  <span className='title'> CHUCKLES</span></h1>
      <div>
      <h2 className='joke'>{data.value}</h2>
      </div>
      <button onClick={handleFetch}></button>
    </div>
    
  );
};

export default App