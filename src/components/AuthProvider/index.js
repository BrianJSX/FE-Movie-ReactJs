import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function AuthProvider({ children }) {
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return history.push("/login");
    }
  });

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default AuthProvider;
