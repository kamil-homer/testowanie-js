import { Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../services/auth";

export const MENU_TYPE = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export const UserLogin = ({ menuType = MENU_TYPE.DESKTOP }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const login = async () => {
    setIsLoading(true);

    const userAccount = await loginUser();

    if (userAccount.data !== null) {
      setUser(userAccount.data);
    } else if (userAccount.error !== null) {
      setLoginError(userAccount.error);
    }

    setIsLoading(false);
  };

  if (menuType === MENU_TYPE.DESKTOP) {
    return (
      <>
        {user && <span>Hello, {user.name}</span>}
        {loginError && <span>Error: {loginError}</span>}
        {isLoading && <span>Logging in...</span>}
        {!user && !loginError && !isLoading && (
          <>
            <Button color="primary" variant="text" size="small" onClick={login}>
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
          </>
        )}
      </>
    );
  } else if (menuType === MENU_TYPE.MOBILE) {
    return (
      <>
        {user && <span>Hello, {user.name}</span>}
        {loginError && <span>Error: {loginError}</span>}
        {isLoading && <span>Logging in...</span>}
        {!user && !loginError && !isLoading && (
          <>
            <MenuItem>
              <Button color="primary" variant="contained" fullWidth>
                Sign up
              </Button>
            </MenuItem>
            <MenuItem>
              <Button color="primary" variant="outlined" fullWidth>
                Sign in
              </Button>
            </MenuItem>
          </>
        )}
      </>
    );
  }
};
