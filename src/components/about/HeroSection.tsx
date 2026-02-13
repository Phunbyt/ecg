import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        borderRadius: "0 10rem 0 0",
        py: 8,
        overflow: "hidden", // Ensure the image doesn't overflow
      }}
    >
      {/* Background Image with Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "60vh", md: "80vh" }, // Responsive height
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Place it behind the content
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          },
        }}
      />

      {/* Content */}
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontSize: "3.25rem",
                lineHeight: 1.2,
                fontWeight: "bold",
                color: "common.white", // White text for readability
              }}
            >
              Get to know Kopek and Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 6, maxWidth: "800px", color: "common.white" }} // White text for readability
            >
              Our mission is to revolutionize remote hiring by connecting US
              market enterprises and startups with exceptional talents.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/contact"
              sx={{
                px: 4,
                py: 2,
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive button text
                backgroundColor: "primary.main", // Ensure button is visible
                "&:hover": {
                  backgroundColor: "primary.dark", // Darken on hover
                },
              }}
            >
              Talk to An Expert
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
