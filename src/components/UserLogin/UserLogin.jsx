import { Button, MenuItem } from "@mui/material";
import { useState } from "react";

export const MENU_TYPE = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export const UserLogin = ({ menuType = MENU_TYPE.DESKTOP }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (menuType === MENU_TYPE.DESKTOP) {
    return (
      <>
        {isLoggedIn ? (
          <span>Hello, username</span>
        ) : (
          <>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => setIsLoggedIn(true)}
            >
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
        {isLoggedIn ? (
          <span>Hello, username</span>
        ) : (
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
