import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 w-full border-b flex flex-col">
        <div className="h-full w-full flex flex-row">
            <div className="h-full w-full flex flex-row">
                <div className="h-full w-full flex justify-end p-2">
                    <img src="assets/logo.png" alt="logo" className="border rounded-full"/>
                </div>
                <div className="h-full w-full flex">
                    <div className="h-full w-full flex flex-col justify-center">
                        React Shop
                    </div>
                </div>
            </div>
            <div className="h-full w-full flex flex-row">
                <div className="h-full w-full flex justify-end">
                    <input type="text" placeholder="Enter email address.." className="h-8 rounded-sm focus:outline-none self-center" />
                </div>
                <div className="h-full w-full flex">
                    <div className="h-full w-full flex border">
                        Subscribe
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;