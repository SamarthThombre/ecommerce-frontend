import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const AdminPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);


  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    if (!user || user.role !== "admin") navigate("/signin");
    fetchAllData();
  }, [navigate, user]);

  const fetchAllData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const [res] = await Promise.all([
        axios.get("http://localhost:5000/api/product/list", config),
        
      ]);

      setProducts(res.data.products); 
     
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  const handleAddProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/products", newProduct, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewProduct({ name: "", price: "" });
      fetchAllData();
    } catch (err) {
      console.error("Add product error:", err);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAllData();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // const handleMarkDelivered = async (id) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     await axios.put(
  //       `http://localhost:5000/api/orders/${id}/deliver`,
  //       {},
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     fetchAllData();
  //   } catch (err) {
  //     console.error("Mark delivered error:", err);
  //   }
  // };

  return (
    <>
    <Header />
    <div className="p-20 bg-[#2B2B2B] w-[100vw] h-fit text-white ">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {/* Add Product */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
        <div className="flex flex-wrap gap-2">
          <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded w-full sm:w-[48%]"
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="border p-2 rounded w-full sm:w-[48%]"
          />
          <input
            type="text"
            placeholder="Brand"
            value={newProduct.brand}
            onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
            className="border p-2 rounded w-full sm:w-[48%]"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 rounded w-full sm:w-[48%]"
          />
          <input
            type="number"
            placeholder="Count in Stock"
            value={newProduct.countInStock}
            onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })}
            className="border p-2 rounded w-full sm:w-[48%]"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="border p-2 rounded w-full sm:w-[48%]"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-600 text-white px-4 py-2 rounded mt-2 w-full sm:w-auto"
          >
            Add Product
          </button>
        </div>
      </div>


      {/* Products List */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
          <div
            key={product._id}
            className=" rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <img
            src={product.image?.url}
            alt={product.name}
            className="h-48 w-full object-cover"
            />

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Price:</strong> ₹{product.price}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>In Stock:</strong> {product.countInStock}
                </p>
              </div>

              <button
              onClick={() => handleDeleteProduct(product._id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
              Delete Product
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>


     
    </div>
    </>
  );
};

export default AdminPage;
