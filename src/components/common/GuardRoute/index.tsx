import { IProtectedRouteProps } from "@src/components/common/ProtectedRoute/IProtectedRoute";
import { useAuth } from "@src/lib/context/firebase/useAuth";
import { memo } from "react";
import { Navigate } from "react-router-dom";

function GuardRoute({ children }: IProtectedRouteProps): React.ReactElement {
  const { authUser } = useAuth() as any;
  console.log(authUser);
  if (!authUser) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default memo(GuardRoute);
