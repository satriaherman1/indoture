import React, { useContext } from "react";

interface IauthUserContext {
  authUser: any;
  loading: boolean;
  signIn: any;
  signInWithGoogle: any;
  signUp: any;
  signOut: any;
}

const AuthUserContext = React.createContext<IauthUserContext>({
  authUser: null,
  loading: true,
  signIn: () => {},
  signInWithGoogle: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export default function AuthUserProvider({ children }: any) {}

export const useAuth = () => useContext(AuthUserContext);
export { AuthUserContext };
