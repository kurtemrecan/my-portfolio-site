import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post('https://reqres.in/api/workintech', {
        name: 'Emre Can Kurt',
        email: 'can.kurt764@gmail.com',
      })
      .then((res) => {
        console.log('VERİ GÖNDERİLDİ:', res);
        setData(res.data.projectsData);
        setLoad(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, []);

  if (load) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default ApiCall;
