import React from "react";
import { Box, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiMui,
  SiAntdesign,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "React", icon: <FaReact color="#61DBFB" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
      { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
    ],
    Database: [{ name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> }],
    "UI Libraries": [
      { name: "MUI", icon: <SiMui color="#007FFF" /> },
      { name: "Ant Design", icon: <SiAntdesign color="#0170FE" /> },
    ],
    "Tools & Platforms": [
      { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
    ],
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      id="skills"
      sx={{
        mt: 6,
        px: 2,
        background: "#fafafa",
        minHeight: "55vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: 4,
            mb: 4,
            fontSize: { xs: 38 },
          }}
        >
          SKILLS
        </Typography>

        <Typography
          align="center"
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "black",
            fontSize: 15,
            lineHeight: 1.7,
            mb: 8,
          }}
        >
          These are the technologies and tools I have learned and used
          throughout my development journey. I enjoy building modern web
          applications and continuously improving my skills.
        </Typography>
      </motion.div>

      {/* Skills Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        component={motion.div}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={category}>
            <Paper
              component={motion.div}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.04,
                transition: { duration: 0.2 },
              }}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid black",
                background: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 2.5,
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                {category}
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                justifyContent="center"
              >
                {items.map((skill) => (
                  <Chip
                    key={skill.name}
                    component={motion.div}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    icon={
                      <motion.span whileHover={{ rotate: 12 }}>
                        {skill.icon}
                      </motion.span>
                    }
                    label={skill.name}
                    variant="outlined"
                    sx={{
                      borderRadius: "999px",
                      fontSize: 13,
                      px: 1,
                      borderColor: "black",
                      "& svg": { fontSize: 18 },
                      "&:hover": {
                        borderColor: "#F63049",
                        color: "#F63049",
                        background: "#fff5f6",
                        cursor: "default",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
