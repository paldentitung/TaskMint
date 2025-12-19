import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header from "../Components/Header";
import { FaUser, FaEnvelope, FaLock, FaSignOutAlt } from "react-icons/fa";

const Setting = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("taskmint-user");
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setUserData(user);
        setFormData({
          username: user.username || "",
          email: user.email || "",
          password: "",
        });
      } catch {
        localStorage.removeItem("taskmint-user");
      }
    }
  }, [setUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const { username, email, password } = formData;
    if (!username || !email || !password) return alert("All fields required");
    const user = { username, email, password };
    localStorage.setItem("taskmint-user", JSON.stringify(user));
    setUserData(user);
    setFormData((prev) => ({ ...prev, password: "" }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (!username || !email) return alert("Username and email required");
    const currentUser = JSON.parse(
      localStorage.getItem("taskmint-user") || "{}"
    );
    const updated = {
      username,
      email,
      password: password || currentUser.password,
    };
    localStorage.setItem("taskmint-user", JSON.stringify(updated));
    setUserData(updated);
    setIsEditing(false);
    setFormData((prev) => ({ ...prev, password: "" }));
  };

  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      localStorage.removeItem("taskmint-user");
      setUserData(null);
      setIsEditing(false);
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <Header title="Settings" subtitle="Manage your profile & preferences" />

      {/* Main Section */}
      <section className="max-w-md mx-auto space-y-6 mt-10">
        {/* Profile / Login Card */}
        <div className="bg-neutral-900 rounded-3xl shadow-2xl p-8 border border-neutral-800">
          {userData ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <FaUser className="text-indigo-400" /> Profile
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition"
                  >
                    Edit
                  </button>
                )}
              </div>

              {!isEditing ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaUser className="text-gray-500" />
                    <span className="font-medium">Username:</span>
                    <span>{userData.username}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaEnvelope className="text-gray-500" />
                    <span className="font-medium">Email:</span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaLock className="text-gray-500" />
                    <span className="font-medium">Password:</span>
                    <span>{"•".repeat(8)}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSave} className="space-y-4">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="New password (optional)"
                    className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-white font-medium transition">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-2xl text-white font-medium transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-neutral-800 flex justify-center">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-rose-400 hover:text-rose-300 font-semibold transition"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
                Login to TaskMint
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 rounded-2xl bg-neutral-800 text-white focus:ring-2 focus:ring-indigo-500 transition"
                />
                <button
                  onClick={handleLogin}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-white font-medium transition"
                >
                  Login
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Demo app — data stored locally in your browser.
              </p>
            </>
          )}
        </div>

        {/* About Card */}
        <div className="bg-neutral-900 rounded-3xl shadow-2xl p-6 text-center border border-neutral-800">
          <h3 className="text-lg font-bold mb-2">About TaskMint</h3>
          <p className="text-gray-400 text-sm">
            Version: 1.0.0 <br />
            Developer: Palden Dorje Titung
          </p>
        </div>
      </section>
    </div>
  );
};

export default Setting;
