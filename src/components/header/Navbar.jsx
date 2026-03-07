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
import AdbIcon from "@mui/icons-material/Adb";
import avatar from "../../assets/images/avatar-2.jpg";

const pages = ["Home", "Skills", "Projects", "Experience", "Certifications"];

function NavBar() {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="100%">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Phạm Thành"
              src={avatar}
              sx={{
                border: "2px solid #F63049",
                p: 0,
                mr: 2,
                display: { xs: "none" },
              }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  cursor: "default",
                },
              }}
            >
              Phạm Thành
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: "auto",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    scrollToSection(page);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    mx: 3,
                    color: "white",
                    display: "block",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#F63049",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
