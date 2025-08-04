
![Uploading web page.png…]()


# eCommerce Frontend Project (React + Tailwind CSS)

This is a frontend project for a modern eCommerce web app built with **React.js** and **Tailwind CSS**. It connects to a backend API to support features like product listing, user authentication, and shopping cart functionality.

---

## 🚀 Features

- Product listing with images and details  
- Add to cart functionality with quantity support  
- User signup and login using JWT  
- Avatar shown in header after login  
- Price calculation and total cart value  
- Responsive layout using Tailwind CSS  
- API communication using Axios  

---

## 📁 Folder Structure

```
src/
  components/       # Reusable UI components  
  context/          # Global state (e.g., CartContext)  
  pages/            # Page components (Home, Product, Cart, Login)  
  App.jsx           # App routes and layout  
  main.jsx          # App entry point  
```

---

## 🛠️ How to Run

1. Clone the repository  
2. Run: `npm install`  
3. Start dev server: `npm run dev`  
4. Ensure the backend is running at `http://localhost:5000` or update the base URL

---

## 🌐 Environment Variables (Optional)

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 Notes

- When logged in, the header shows the user's avatar instead of Login/Signup  
- Cart is globally managed using React Context API  
- Each cart item includes name, image, price, and quantity  
- Total value is calculated using `reduce()`  
- "Added to cart" message shows briefly when an item is added  

---

## 🔮 Upcoming Improvements

- Add quantity increment/decrement buttons  
- Payment gateway integration  
- Better error handling and toast notifications  
- Product filtering and search  
- User-specific order history  

---


## 👤 Author

Samarth Thombre


