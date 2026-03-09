import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import project1 from "../../assets/images/prj1.png";
import project2 from "../../assets/images/prj2.png";
import project3 from "../../assets/images/prj3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Projects() {
  const projects = [
    {
      title: "Back2Use",
      time: "09/2025 - 12/2025",
      description:
        "QR-based reusable packaging management platform for F&B businesses. The system tracks borrow–return transactions, calculates penalties, and records CO₂ reduction data on blockchain.",
      image: project1,
      tech: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "JWT",
        "Socket.io",
        "Solidity",
        "Ethers.js",
        "VNPay",
        "MoMo",
        "Cloudinary",
      ],
      github: "https://github.com/phamthanh1002/back-2-use-be",
      demo: "https://back-2-use-fe-eight.vercel.app",
    },
    {
      title: "DesignMyKicks",
      time: "05/2025 - 08/2025",
      description:
        "Custom shoe e-commerce platform with role-based dashboards for Customer, Staff, and Admin. Features product listing, filtering, cart, checkout flow, and order tracking.",
      image: project2,
      tech: [
        "React",
        "Redux Toolkit",
        "React Router",
        "Ant Design",
        "Axios",
        "Chart.js",
        "React Leaflet",
        "Framer Motion",
        "Vite",
      ],
      github: "https://github.com/phamthanh1002/EXE201-CustomShoesSystem-FE",
      demo: "https://designmykicks.vercel.app/",
    },
    {
      title: "Shopee Web Clone",
      time: "Dec 11, 2024",
      description:
        "A responsive clone of the Shopee homepage built using pure HTML and CSS. The project focuses on pixel-perfect layout, responsive design, and recreating Shopee's UI without external frameworks.",
      image: project3,
      tech: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/phamthanh1002/shopee-web-clone",
      demo: "https://phamthanh1002.github.io/shopee-web-clone/",
    },
  ];

  return (
    <Container
      id="projects"
      maxWidth="100%"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(180deg, #fafafa, #c7c7c7)",
      }}
    >
      {/* TITLE */}
      <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "black",
            textTransform: "uppercase",
            fontSize: { xs: 38 },
          }}
        >
          Projects
        </Typography>

        <Typography
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "black",
            fontSize: { xs: 14, md: 15 },
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Some of the projects I have worked on, demonstrating my experience in
          software development and problem solving.
        </Typography>
      </Box>

      {/* SWIPER */}
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        style={{
          border: "2px solid black",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 6 },
                borderRadius: 4,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* LEFT */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    color: "white",
                    WebkitTextStroke: "1px black",
                    fontSize: { xs: 26, md: 36 },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: 14, md: 16 },
                  }}
                >
                  {project.time}
                </Typography>

                <Typography
                  sx={{
                    color: "black",
                    lineHeight: 1.7,
                    mb: 4,
                    maxWidth: { xs: "100%", md: 520 },
                    mx: { xs: "auto", md: 0 },
                    fontSize: { xs: 14, md: 15 },
                  }}
                >
                  {project.description}
                </Typography>

                {/* TECH */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  columnGap={1}
                  rowGap={1}
                  mb={4}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        color: "black",
                        border: "1px solid #374151",
                        background: "rgba(255,255,255,0.04)",
                        transition: "0.25s",
                        "&:hover": {
                          borderColor: "#F63049",
                          color: "#F63049",
                          cursor: "default",
                        },
                      }}
                    />
                  ))}
                </Stack>

                {/* BUTTONS */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    component="a"
                    href={project.github}
                    target="_blank"
                    sx={{
                      backgroundColor: "#F63049",
                      px: 3,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#d91e3f",
                      },
                    }}
                  >
                    GitHub
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    component="a"
                    href={project.demo}
                    target="_blank"
                    sx={{
                      color: "black",
                      borderColor: "black",
                      px: 3,
                      py: 1.2,
                      borderRadius: 2,
                      transition: "0.25s",
                      "&:hover": {
                        borderColor: "#F63049",
                        color: "#F63049",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Stack>
              </Box>

              {/* RIGHT IMAGE */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 320, sm: 420, md: 600 },
                    borderRadius: 4,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
