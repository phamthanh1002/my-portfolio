import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook } from "@mui/icons-material";

import avatar from "../../assets/images/avatar-4.jpg";
import background from "../../assets/images/bg2.png";

import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "../modal/ContactModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container
      id="home"
      maxWidth="100%"
      sx={{
        scrollMarginTop: "80px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box width="100%">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* Avatar */}
          <Box
            sx={{
              width: { xs: 200, sm: 240, md: 300, lg: 340 },
              height: { xs: 200, sm: 240, md: 300, lg: 340 },
              border: "4px dashed #000",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Avatar
                src={avatar}
                alt="Pham Thanh"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          </Box>

          {/* Text */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: 520 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Name */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  color: "#6B7280",
                  fontWeight: 400,
                  fontSize: { xs: 20, sm: 24 },
                }}
              >
                Hi, It's
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "black",
                  fontSize: { xs: 26, sm: 32, md: 38 },
                }}
              >
                Phạm Thành
              </Typography>
            </Box>

            {/* Typed Text */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                mt: 1,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  color: "#6B7280",
                  fontWeight: 400,
                  fontSize: { xs: 16, sm: 18 },
                }}
              >
                I'm a
              </Typography>

              <Typography
                sx={{
                  color: "#F63049",
                  fontWeight: 600,
                  fontSize: { xs: 18, sm: 22, md: 24 },
                }}
              >
                <TypewriterComponent
                  options={{
                    strings: [
                      "Software Developer",
                      "IT Developer",
                      "Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 1500,
                  }}
                />
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                color: "#6B7280",
                lineHeight: 1.8,
                mt: 2,
                mb: 3,
                fontSize: { xs: 14, sm: 16 },
                px: { xs: 1, md: 0 },
              }}
            >
              I am passionate about solving problems through technology. I work
              on developing software that is{" "}
              <span style={{ color: "black", fontWeight: 600 }}>reliable</span>,{" "}
              <span style={{ color: "black", fontWeight: 600 }}>efficient</span>
              , and{" "}
              <span style={{ color: "black", fontWeight: 600 }}>adaptable</span>
              , while continuously learning new tools and frameworks.
            </Typography>

            {/* Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mb: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                component="a"
                href="/cv/Pham-Cong-Thanh-IT-Developer.pdf"
                download="Pham-Cong-Thanh-IT-Developer.pdf"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#F63049",
                  textTransform: "none",
                  px: 3,
                  "&:hover": { backgroundColor: "#c43548" },
                }}
              >
                Download CV
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => setOpen(true)}
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  textTransform: "none",
                  px: 3,

                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#000",
                  },

                  "@media (max-width:600px)": {
                    color: "#fff",
                    borderColor: "#000",
                    backgroundColor: "#000",

                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                      borderColor: "#F63049",
                      boxShadow: "0 0 10px #F63049",
                    },
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>

            <ContactModal open={open} handleClose={() => setOpen(false)} />

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton
                href="https://github.com/phamthanh1002"
                target="_blank"
                sx={{
                  border: "2px solid",
                  borderColor: { xs: "#fff", sm: "#000" },
                  color: { xs: "#fff", sm: "#000" },
                  transition: "all 0.3s",

                  "&:hover": {
                    borderColor: "#F63049",
                    backgroundColor: "#181717",
                    color: "#fff",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                sx={{
                  border: "2px solid",
                  borderColor: { xs: "#fff", sm: "#000" },
                  color: { xs: "#fff", sm: "#000" },
                  transition: "all 0.3s",

                  "&:hover": {
                    borderColor: "#F63049",
                    backgroundColor: "#0A66C2",
                    color: "#fff",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{
                  border: "2px solid",
                  borderColor: { xs: "#fff", sm: "#000" },
                  color: { xs: "#fff", sm: "#000" },
                  transition: "all 0.3s",

                  "&:hover": {
                    borderColor: "#F63049",
                    backgroundColor: "#1877F2",
                    color: "#fff",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Facebook />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
