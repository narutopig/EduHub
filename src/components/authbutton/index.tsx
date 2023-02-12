import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContext } from "../authprovider";

const SignInWithGoogle = ({ handleClick }: any) => {
  const context = useContext(AuthContext);

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(async (userCred) => {
      if (context.setUser) context.setUser(userCred.user);
      await handleClick();
    });
  };

  const handleSignOut = () => {
    auth.signOut();
    if (context.setUser) context.setUser(null);
  };

  if (context.user) {
    return (
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleSignInWithGoogle}
    >
      Sign In
    </button>
  );
};

export default SignInWithGoogle;
