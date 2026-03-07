import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Chip,
  Button,
  Avatar,
} from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import coursera from "../../assets/images/coursera.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MotionBox = motion(Box);

const certifications = [
  {
    title: "Computer Communications",
    organization: "University of Colorado System",
    year: "07/2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/HHRPJNW6R7J8",
  },
  {
    title: "User Experience Research and Design",
    organization: "University of Michigan",
    year: "06/2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/1KDPMVIOX1Y4",
  },
  {
    title: "Project Management Principles and Practices",
    organization: "University of California, Irvine",
    year: "06/2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/LGPFNY1IDTE0",
  },
  {
    title: "Academic English: Writing",
    organization: "The University of Sydney",
    year: "10/2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/J35YVCN8WWFS",
  },
  {
    title: "CertNexus Certified Ethical Emerging Technologist",
    organization: "CertNexus",
    year: "03/2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/RP2SQQVZAP5E",
  },
  {
    title: "Software Development Lifecycle",
    organization: "University of Minnesota",
    year: "12/2022",
    link: "https://www.coursera.org/account/accomplishments/specialization/3B43RH53HYJX",
  },
  {
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    organization: "University of Michigan",
    year: "07/2022",
    link: "https://www.coursera.org/account/accomplishments/specialization/J35YVCN8WWFS",
  },
  {
    title: "Academic Skills for University Success",
    organization: "University of California, Irvine",
    year: "11/2021",
    link: "https://www.coursera.org/account/accomplishments/specialization/7LLS95CRV9NP",
  },
];

export default function Certifications() {
  return (
    <Container
      id="certifications"
      maxWidth="100%"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #a3a3a3, #232323)",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "black",
            mb: 3,
            textTransform: "uppercase",
            fontSize: { xs: 38 },
          }}
        >
          Certifications
        </Typography>

        <Typography
          sx={{
            maxWidth: 650,
            mx: "auto",
            color: "black",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          These certifications reflect my commitment to continuous learning and
          professional growth. They validate my knowledge of modern web
          technologies, development practices, and collaborative workflows used
          in real-world software projects.
        </Typography>
      </Box>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              sx={{
                position: "relative",
                borderRadius: 4,
                p: 3,
                boxShadow: "inset 0 10px 100px rgba(255, 255, 255, 0.89)",

                /* glass effect */
                // background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",

                border: "2px solid rgb(0, 0, 0)",

                height: 230,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                transition: "0.35s all ease",

                /* reflection overlay */
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
                  opacity: 0.4,
                  pointerEvents: "none",
                },

                "&:hover": {
                  borderColor: "#F63049",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Stack spacing={2}>
                {/* Header */}
                <Stack direction="row" alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid black",
                      background: "white",
                    }}
                  >
                    <Avatar
                      src={coursera}
                      alt="Coursera"
                      sx={{
                        width: 42,
                        height: 42,
                        bgcolor: "transparent",
                      }}
                    />
                  </Box>

                  <Chip
                    label={cert.year}
                    size="small"
                    sx={{
                      ml: "auto",
                      background: "rgba(0,0,0,0.15)",
                      backdropFilter: "blur(5px)",
                      color: "#F63049",
                      border: "1px solid black",
                      fontWeight: 600,
                    }}
                  />
                </Stack>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    minHeight: 48,
                    WebkitTextStroke: "1.2px black",
                    fontSize: { xs: 20 },
                  }}
                >
                  {cert.title}
                </Typography>

                {/* Organization */}
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 14,
                  }}
                >
                  {cert.organization}
                </Typography>
              </Stack>

              {/* Button */}
              <Button
                endIcon={<OpenInNewIcon />}
                size="small"
                href={cert.link}
                target="_blank"
                sx={{
                  mt: "auto",
                  width: "fit-content",
                  color: "#F63049",
                  textTransform: "none",
                  p: 0,
                  fontWeight: 600,
                  "&:hover": {
                    background: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                View Credential
              </Button>
            </MotionBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
