import { Box, Container, Typography, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  return (
    <Container
      id="experience"
      maxWidth="100%"
      sx={{
        py: 10,
        minHeight: "55vh",
        background: "linear-gradient(180deg, #c7c7c7, #a3a3a3)",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "black",
            textTransform: "uppercase",
            fontSize: { xs: 38 },
          }}
        >
          Experience
        </Typography>

        <Typography
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "black",
            fontSize: 15,
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Through my working experience, I have gained hands-on knowledge in
          working with APIs, managing data flow. I also developed stronger
          problem-solving skills and learned how to collaborate effectively
          within a development team.
        </Typography>
      </Box>

      <Box
        sx={{
          background: "#1a1a1a",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          border: "1px solid #2a2a2a",
        }}
      >
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={2} mb={5}>
          <Typography
            sx={{
              color: "#F63049",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            Internship Experience
          </Typography>

          <Box
            sx={{
              flex: 1,
              height: "1px",
              background: "#F63049",
            }}
          />
        </Stack>

        {/* Timeline Item */}
        <Stack direction="row" spacing={3}>
          {/* Timeline Icon */}
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid #F63049",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F63049",
              }}
            >
              <WorkIcon fontSize="small" />
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: 18,
                mb: 0.5,
              }}
            >
              Software Developer Intern
            </Typography>

            <Typography
              sx={{
                color: "#9ca3af",
                fontSize: 14,
                mb: 1,
              }}
            >
              FPT Software Academy • Ho Chi Minh City
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: 13,
                mb: 2,
              }}
            >
              Sep 2024 – Dec 2024
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 2,
                color: "#d1d5db",
                fontSize: 14.5,
                lineHeight: 1.8,
                "& li": {
                  mb: 0.6,
                },
              }}
            >
              <li>
                Developed frontend for an online course management web
                application.
              </li>
              <li>Built responsive UI using ReactJS and Material UI.</li>
              <li>Integrated frontend with RESTful APIs.</li>
              <li>Handled state management and backend data rendering.</li>
              <li>
                Collaborated with backend developers using Agile workflow.
              </li>
              <li>
                Achieved{" "}
                <strong>GPA 88.2/100 – Level A (Over Expectation)</strong>.
              </li>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
