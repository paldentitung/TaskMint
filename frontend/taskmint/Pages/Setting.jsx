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
                defaultValue="Palden Dorje Titung"
                className="p-2 rounded-md bg-neutral-800 text-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              Email
              <input
                type="email"
                defaultValue="Palden@gmail.com"
                className="p-2 rounded-md bg-neutral-800 text-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              Password
              <input
                type="password"
                defaultValue="10000000"
                className="p-3 rounded-md bg-neutral-800 text-white"
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
