import { IGuardRouteProps } from "@src/components/common/GuardRoute/IProtectedRoute";
import { useAuth } from "@src/lib/context/firebase/useAuth";
import { memo } from "react";
import { Navigate } from "react-router-dom";

function GuardRoute({ children }: IGuardRouteProps): React.ReactElement {
  const { authUser } = useAuth() as any;

  if (!authUser) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default memo(GuardRoute);
