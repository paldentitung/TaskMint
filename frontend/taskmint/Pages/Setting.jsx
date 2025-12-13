import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
const Setting = () => {
  return (
    <div>
      <Header title="Setting" subtitle="Configuration your TaskMint" />

      <section className="p-6 space-y-6">
        {/* --- Profile Settings --- */}
        <div className="bg-neutral-900 p-4 rounded-md space-y-3">
          <h2 className="font-semibold text-lg">Profile</h2>
          <form className="flex flex-col gap-3">
            <label className="flex flex-col gap-2">
              Username
              <input
                type="text"
                placeholder="e.g. Palden Dorje Titung"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                placeholder="e.g. palden@gmail.com"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col gap-2">
              Password
              <input
                type="password"
                placeholder="Enter a secure password"
                className="p-3  bg-neutral-800 text-white rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              />
            </label>
            <div>
              <Button name="Save" />
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
