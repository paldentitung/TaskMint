import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { AppContext } from "../context/AppContext";
import { FaSignOutAlt } from "react-icons/fa";
const Setting = () => {
  const { setUserData, userData } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Load saved user info on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("taskmint-user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserData(user);
      setUsername(user.username || "");
      setEmail(user.email || "");
    }
  }, []);

  // Handle form submit
  const handelSubmit = (e) => {
    e.preventDefault();

    if (!username || !email) {
      alert("Please enter valid info");
      return;
    }

    const user = { username, email };
    localStorage.setItem(
      "taskmint-user",
      JSON.stringify({ ...user, password })
    );
    setUserData(user);
    setIsEditing(false);
    setPassword(""); // Clear password field
  };

  return (
    <div>
      <Header title="Setting" subtitle="Configuration your TaskMint" />

      <section className="p-6 space-y-6">
        {/* --- Profile Section --- */}
        <div className="bg-neutral-900 p-4 rounded-md space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Profile</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-indigo-400 hover:underline text-sm"
              >
                Edit
              </button>
            )}
          </div>

          {!isEditing ? (
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-400">Username:</span>{" "}
                {userData?.username || "-"}
              </p>
              <p>
                <span className="text-gray-400">Email:</span>{" "}
                {userData?.email || "-"}
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
              <label className="flex flex-col gap-2">
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-3 bg-neutral-800 text-white rounded-md ring-2 ring-gray-400 focus:ring-indigo-400"
                />
              </label>

              <label className="flex flex-col gap-2">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 bg-neutral-800 text-white rounded-md ring-2 ring-gray-400 focus:ring-indigo-400"
                />
              </label>

              <label className="flex flex-col gap-2">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="p-3 bg-neutral-800 text-white rounded-md ring-2 ring-gray-400 focus:ring-indigo-400"
                />
              </label>

              <div className="flex gap-2">
                <Button name="Save" type="submit" />
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* --- About Section --- */}
        <div className="bg-neutral-900 p-4 rounded-md space-y-2">
          <h2 className="font-semibold text-lg">About</h2>
          <div>Version: 1.0.0</div>
          <div>Developer: Palden Dorje Titung</div>
        </div>

        <div className=" bg-transparent transition-all duration-300 ">
          <button className="text-rose-400 font-semibold px-4 py-2 transition-all duration-300 flex gap-2 items-center hover:bg-rose-400 hover:text-white/80 rounded-md ">
            Log Out
            <FaSignOutAlt />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Setting;
