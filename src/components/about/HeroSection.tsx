import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(11, 122, 159, 0.85) 0%, rgba(127, 181, 57, 0.85) 100%)",
          },
        }}
      />

      {/* Content */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "bold",
                letterSpacing: 3,
                mb: 2,
                display: "block",
              }}
            >
              ABOUT ECG LIFE SCIENCES
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontSize: { xs: "2.5rem", md: "3.75rem" },
                lineHeight: 1.2,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Advancing Life Sciences Through Exceptional Talent
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                maxWidth: "700px",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.6,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
              }}
            >
              We connect brilliant minds with breakthrough opportunities in biotech,
              pharmaceuticals, and medical devices—driving innovation that transforms
              healthcare.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                href="/contact"
                sx={{
                  px: 5,
                  py: 2,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Partner With Us
              </Button>
              <Button
                variant="outlined"
                href="/solutions"
                sx={{
                  px: 5,
                  py: 2,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderColor: "white",
                  color: "white",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Our Solutions
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
