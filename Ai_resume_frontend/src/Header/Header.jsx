import { UserButton, useUser } from "@clerk/clerk-react";
import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="border border-black p-2 m-auto flex justify-between">
      Header
      {isSignedIn ? (
        <div className="flex justify-between gap-5">
          {" "}
          <Link to={'/Dashboard'}>
          <button>Dashboard</button>
          </Link>
          <UserButton />{" "}
        </div>
      ) : (
        <Link to={"/auth/Signin"}>
          <button className="border border-black">Get started</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
