import axios from "axios";
const BASE_URL = "http://localhost:5000"; 

const fetchCartItems = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/cart`);
    console.log(res.data); // or setCartItems(res.data);
  } catch (err) {
    console.error("Error fetching cart items:", err);
  }
};

export default fetchCartItems ;