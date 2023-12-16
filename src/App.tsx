import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import Home from "./pages/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ToolBarMenuItem = (props: {
  href: string;
  children: React.ReactNode | string;
}) => {
  return (
    <Typography
      {...props}
      variant="h4"
      noWrap
      component="a"
      sx={{
        mr: 4,
        display: { xs: "none", md: "flex" },
        color: "inherit",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: "2px",
          textUnderlineOffset: "5px",
        },
      }}
    >
      {props.children}
    </Typography>
  );
};

export default function App() {
  return (
    <>
      <CssBaseline />
      {/* todo: handle app bar when small screen, use hamburger */}
      <AppBar
        sx={{
          background: "transparent",
          boxShadow: "none",
          color: "inherit",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <ToolBarMenuItem href="/">Home</ToolBarMenuItem>

          <ToolBarMenuItem href="https://open.spotify.com/artist/68flYKnXNMn8CVDaqSkznJ?si=0ydx2P_rSAKhys8XwE4lLQ">
            Listen
          </ToolBarMenuItem>

          {/* <ToolBarMenuItem href="#about">About</ToolBarMenuItem> */}

          {/* todo: figure out bug where underline does not show for FA icons */}
          <ToolBarMenuItem href="https://www.instagram.com/jadamareyes/">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </ToolBarMenuItem>

          <ToolBarMenuItem href="https://www.tiktok.com/@jadamareyes">
            <FontAwesomeIcon icon={faTiktok} fontSize={".9em"} />
          </ToolBarMenuItem>

          <ToolBarMenuItem href="https://twitter.com/jadamareyes">
            <FontAwesomeIcon icon={faXTwitter} fontSize={".9em"} />
          </ToolBarMenuItem>
        </Toolbar>
      </AppBar>
      <Home />
    </>
  );
}
