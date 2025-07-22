import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(res => {
        console.log("Response from backend:", res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  }, []);

  return <h2>Check the console for backend data</h2>;
};

export default Test;
