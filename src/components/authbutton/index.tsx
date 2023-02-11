import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContext } from "../authprovider";

const SignInWithGoogle = () => {
  const context = useContext(AuthContext);

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((userCred) => {
      if (context.setUser) context.setUser(userCred.user);
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleSignInWithGoogle}
    >
      Sign In with Google
    </button>
  );
};

export default SignInWithGoogle;
