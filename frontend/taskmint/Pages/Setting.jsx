import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const Setting = () => {
  const { setUserData, userData } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("enter the valid info");
      return;
    }
    setUserData({ username, email, password });
    console.log(userData);
  };
  return (
    <div>
      <Header title="Setting" subtitle="Configuration your TaskMint" />

      <section className="p-6 space-y-6">
        {/* --- Profile Settings --- */}
        <div className="bg-neutral-900 p-4 rounded-md space-y-3">
          <h2 className="font-semibold text-lg">Profile</h2>
          <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
            <label className="flex flex-col gap-2">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. Palden Dorje Titung"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. palden@gmail.com"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col gap-2">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a secure password"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <div>
              <Button name="Save" type="submit" />
            </div>
          </form>
        </div>

        {/* --- About Section --- */}
        <div className="bg-neutral-900 p-4 rounded-md space-y-2">
          <h2 className="font-semibold text-lg">About</h2>
          <div>Version: 1.0.0</div>
          <div>Developer: Palden Dorje Titung</div>
        </div>
      </section>
    </div>
  );
};

export default Setting;
