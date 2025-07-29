import  useCart  from '../components/useCart.js';
import Header from '../components/Header.jsx';

const My_Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className='bg-[#F6EEE5] h-[100%]'>
      <Header/>
      <div className="p-4 ">
        <h2 className="text-2xl mb-4">Your Cart</h2>
        {cartItems.map(item => (
          <div key={item._id} className="border-b py-2">
            <h4>{item.name}</h4>
            <p>Qty: {item.quantity} | Price: ₹{item.price}</p>
            <button onClick={() => removeFromCart(item._id)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
        <h3 className="mt-4 text-xl">Total: ₹{totalPrice}</h3>
        <button onClick={clearCart} className="mt-2 bg-red-600 text-white px-4 py-2 rounded">Clear Cart</button>
      </div>
    </div>
    </>
  );
};


export default My_Cart;