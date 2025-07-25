import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log("Response from backend:", res.data);
      })
      .catch(err => {
        console.error("Error:", err);
    });
  }, []);
};

export default Test;
