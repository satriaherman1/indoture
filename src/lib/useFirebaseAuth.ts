import app from "@src/config/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithRedirect, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// auth
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
const formatAuthUser = (user: any) => {
  return {
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    displayName: user.displayName,
  };
};

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const signInWithGoogle = () => signInWithRedirect(auth, provider);
  const signUp = (email: string, password: string, { username }: any) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      updateProfile(userCredential.user, {
        displayName: username,
      });

      localStorage.setItem("user", JSON.stringify(userCredential.user));
      return (window.location.href = "/");
    });
  };
  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => (window.location.href = "/"));
  };

  const signOut = () => {
    auth.signOut().then(clear);
  };

  const authStateChanged = (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState) as any;
    setAuthUser(formattedUser);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, [authUser, loading]);

  return {
    authUser,
    loading,
    signInWithGoogle,
    signIn,
    signUp,
    signOut,
  };
}
