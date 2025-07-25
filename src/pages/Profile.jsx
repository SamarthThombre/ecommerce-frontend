import React from "react";
import { useAuth } from "../context/AuthContext"; // adjust path if needed
import avtar from "../assets/icon-7797704_1280.png"; 
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const { user, logout } = useAuth();
    const Navigate = useNavigate();

    const handleLogout = () => {
        logout();           
        Navigate("/signin"); 
    };



    if (!user) {
        return (
        <section className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-500">Please log in to view profile.</p>
        </section>
        );
    }

  return (
    <>
        <div className="bg-[#3d3c3b]">
            <Header />
            <section className="min-h-screen flex items-center justify-center p-6">
                <div className="bg-[#eadbcb] rounded-2xl shadow-md p-8 max-w-3xl w-full">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src={user.avatar || avtar}
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
                        />

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-gray-500">{user.role || "User"}</p>
                            <p className="mt-2 text-sm text-gray-600">{user.bio || "No bio yet"}</p>

                            <div className="mt-4 space-y-1">
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                {user.phone && (
                                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                                )}
                            </div>

                            <button className="mt-4 mr-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Edit Profile
                            </button>

                            <button className="mt-4 mr-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" 
                            onClick={handleLogout}>Logout</button>

                            {user?.role === "admin" && (
                               <button className="mt-4 mr-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                onClick={() => Navigate("/admin")}>
                                    Admin Dashboard
                               </button> 
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </>
  );
};

export default Profile;
