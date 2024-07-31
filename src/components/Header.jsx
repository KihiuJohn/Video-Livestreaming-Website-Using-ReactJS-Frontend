import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box, InputBase, useMediaQuery } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import {
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logo-small.png";
import logoDark from "../assets/logo-dark.png";
import logoSmallDark from "../assets/logo-small-dark.png";

const Search = styled("div")(({ theme, show, darkMode, isPopup }) => ({
  position: isPopup ? "fixed" : "relative",
  top: isPopup ? 64 : "auto",
  left: 0,
  right: 0,
  zIndex: 1200,
  backgroundColor: darkMode
    ? "rgb(18, 18, 18)"
    : alpha(theme.palette.common.white, 0.9),
  border: `1px solid ${darkMode ? "white" : "black"}`,
  display: show ? "flex" : "none",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: "8px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    position: "relative",
    width: "50%",
    backgroundColor: darkMode
      ? "rgb(18, 18, 18)"
      : alpha(theme.palette.common.white, 0.9),
    border: `1px solid ${darkMode ? "white" : "black"}`,
    padding: 0,
    marginLeft: theme.spacing(2),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme, focused }) => ({
  color: "inherit",
  padding: theme.spacing(1, 2),
  paddingRight: theme.spacing(7),
  borderRadius: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: 0,
    width: "100%",
  },
  border: focused ? `2px solid ${theme.palette.secondary.main}` : "none",
}));

const SearchIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  marginRight: theme.spacing(1),
}));

function Header({ setDarkMode, darkMode, onMenuClick, isSidebarOpen }) {
  const [showSearch, setShowSearch] = useState(false);
  const [focused, setFocused] = useState(false);
  const searchRef = useRef(null);
  const theme = useTheme();
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const handleSearchIconClick = () => {
    setShowSearch((prev) => !prev);
    setFocused((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
      setFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "rgb(255,255,255)";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: darkMode ? "#121212" : "rgb(255,255,255)",
        color: darkMode ? "white" : "black",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          padding: "3px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuIconButton size="large" color="inherit" onClick={onMenuClick}>
            {isSidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </MenuIconButton>

          <img
            src={darkMode ? logo : logoDark}
            srcSet={`${darkMode ? logoSmall : logoSmallDark} 600w, ${
              darkMode ? logo : logoDark
            } 1200w`}
            alt="Livestream Platform Logo"
            style={{ width: "auto", height: "auto", maxWidth: "150px" }}
          />
        </Box>
        {isMediumOrLarger && (
          <Search
            ref={searchRef}
            show={true}
            darkMode={darkMode}
            isPopup={false}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onClick={() => {
                setShowSearch(true);
                setFocused(true);
              }}
              focused={focused}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        )}
        <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
          {isMediumOrLarger ? (
            <>
              <IconButton
                size="large"
                color="inherit"
                sx={{
                  ml: 1,
                  backgroundColor: darkMode
                    ? "rgb(37, 37, 37)"
                    : "rgb(246, 246, 247)",
                  borderRadius: "4px",
                  padding: "6px",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgb(50, 50, 50)"
                      : "rgb(230, 230, 230)",
                  },
                  "&:focus-visible": {
                    outline: "none",
                  },
                }}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                sx={{
                  ml: 1,
                  mr: 2,
                  backgroundColor: darkMode
                    ? "rgb(37, 37, 37)"
                    : "rgb(246, 246, 247)",
                  borderRadius: "4px",
                  padding: "6px",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgb(50, 50, 50)"
                      : "rgb(230, 230, 230)",
                  },
                  "&:focus-visible": {
                    outline: "none",
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </>
          ) : (
            <>
              <SearchIconButton
                size="large"
                color="inherit"
                onClick={handleSearchIconClick}
              >
                {showSearch ? <CloseIcon /> : <SearchIcon />}
              </SearchIconButton>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                sx={{
                  ml: 1,
                  mr: 2,
                  backgroundColor: darkMode
                    ? "rgb(37, 37, 37)"
                    : "rgb(246, 246, 247)",
                  borderRadius: "4px",
                  padding: "6px",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgb(50, 50, 50)"
                      : "rgb(230, 230, 230)",
                  },
                  "&:focus-visible": {
                    outline: "none",
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
      {!isMediumOrLarger && (
        <Search
          ref={searchRef}
          show={showSearch}
          darkMode={true}
          isPopup={true}
        >
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onClick={() => {
              setShowSearch(true);
              setFocused(true);
            }}
            focused={focused}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      )}
    </AppBar>
  );
}

export default Header;
