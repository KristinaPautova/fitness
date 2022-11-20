import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../img/logo.svg";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import {useState} from "react";
import {
    useAuthActions
} from "../../hooks/useActions";
import {useAuth} from "../../store/action/auth";

const pages = ["shop", "free", "add"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  //toggle
    const [loginToggleButton, setLoginToggleButton] = useState(false);
    const [isLoginButton, setIsLoginButton] = useState(false);
    const [authValue, setAuthValue] = useState({ email: "", password: "" });

    const { logout, signUp, signIn } = useAuthActions();
    const user = useAuth();


    //register
    const handleSignIn = (event: any) => {
        event.preventDefault();
        if (!authValue.email || !authValue.email) {
            alert("заполните все поля");
            return;
        }
        signIn(authValue.email, authValue.password);
        setAuthValue({ email: "", password: "" });
    };
    const handleSignUp = (event: any) => {
        event.preventDefault();
        if (!authValue.email || !authValue.email) {
            alert("заполните все поля");
            return;
        }
        signUp(authValue.email, authValue.password);
        setAuthValue({ email: "", password: "" });
    };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <div className='header'>
    <AppBar position="fixed" className="app__bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`}>
                    <Typography className="app__text" textAlign="center">
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {
                    user ?
                        <MenuItem key='logout' onClick={handleCloseUserMenu}>
                            <Typography onClick={logout} textAlign="center">Log out</Typography>
                        </MenuItem>
                        :
                        <MenuItem key='login' onClick={handleCloseUserMenu}>
                            <Typography
                                onClick={() => setLoginToggleButton(!loginToggleButton)}
                                textAlign="center">Log in</Typography>
                        </MenuItem>
                }


            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
          {isLoginButton ? (
              !user ? (
                  <form
                      action=""
                      className={`login-form ${loginToggleButton ? "active" : null}`}
                  >
                      <h3>Login</h3>

                      <input
                          value={authValue.email}
                          onChange={(e) =>
                              setAuthValue({ ...authValue, email: e.target.value })
                          }
                          type="email"
                          placeholder="email "
                          className="box"
                      />

                      <input
                          value={authValue.password}
                          onChange={(e) =>
                              setAuthValue({ ...authValue, password: e.target.value })
                          }
                          type="password"
                          placeholder="password"
                          className="box"
                      />

                      <input
                          type="submit"
                          value="Sign In"
                          className="btn"
                          onClick={handleSignIn}
                      />

                      <p>
                          Don't have an account?
                          <Link to={""} onClick={() => setIsLoginButton(!isLoginButton)}>
                              Sign Up
                          </Link>
                      </p>
                  </form>
              ) : ''
          ) : !user ? (
              <form
                  action=""
                  className={`login-form ${loginToggleButton ? "active" : null}`}
              >
                  <h3>Register</h3>

                  <input
                      value={authValue.email}
                      onChange={(e) =>
                          setAuthValue({ ...authValue, email: e.target.value })
                      }
                      type="email"
                      placeholder="Email"
                      className="box"
                  />

                  <input
                      value={authValue.password}
                      onChange={(e) =>
                          setAuthValue({ ...authValue, password: e.target.value })
                      }
                      type="password"
                      placeholder="password"
                      className="box"
                  />

                  <input
                      type="submit"
                      value="регистрация"
                      className="btn"
                      onClick={handleSignUp}
                  />

                  <p>
                      Have an acccount?
                      <Link to={""} onClick={() => setIsLoginButton(!isLoginButton)}>
                          Sign In
                      </Link>
                  </p>
              </form>
          ) : ''}
      </div>
  );
};
export default Navigation;
