import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Container
      maxWidth="100%"
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #232323, #000000)",
      }}
    >
      <Box textAlign="center">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "white",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontSize: { xs: 38 },
            }}
          >
            Thank You for Visiting
          </Typography>
        </motion.div>

        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "#a1a1aa",
              fontSize: 16,
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Thank you for taking the time to explore my portfolio. I truly
            appreciate your interest in my work and professional journey. I am
            passionate about building meaningful software solutions and
            continuously learning new technologies to improve as a developer.
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "#a1a1aa",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            If you would like to collaborate, discuss opportunities, or simply
            connect, feel free to reach out. I would be happy to hear from you.
          </Typography>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            height: "2px",
            background: "#F63049",
            margin: "40px auto 0",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Container>
  );
}
