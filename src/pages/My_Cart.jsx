import  useCart  from '../components/useCart.js';
import Header from '../components/Header.jsx'
import coverImage from '../assets/aboutus.jpg'; 


const My_Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const Total  = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  console.log("Cart Total:", total);




  return (
    <div className=''>
      <section
        className="relative bg-cover bg-center text-white  flex items-center justify-center px-6 md:px-20 py-20"
        style={{ backgroundImage: `url(${coverImage})` }}>
        
        <div className="absolute inset-0 bg-black/50  z-0" />
        <Header />
      </section>
      
      <div className="p-4 max-w-4xl mt-4 m-auto">
        <h1 className="text-4xl font-bold mb-4">🛒 My Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image?.url || item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  
                  <button onClick={clearCart} className="mt-2 bg-red-600 text-white px-4 py-2 rounded">Clear Cart</button>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-6 border-t pt-4">
              <p className="text-xl font-bold">
                Total: ₹{total}
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded mt-2 hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default My_Cart;
