import { IProtectedRouteProps } from "@src/components/common/ProtectedRoute/IProtectedRoute";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isSignedIn, children }: IProtectedRouteProps) {
  if (isSignedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
