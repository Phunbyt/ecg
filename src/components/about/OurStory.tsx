"use client"; // Mark this component as a Client Component

import React from "react";
import { Box, Typography, Container } from "@mui/material"; // Corrected Grid import
import Grid from "@mui/material/Grid2"; // Correct Grid import

const OurStorySection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.default",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
          }}
        >
          Our Story
        </Typography>

        {/* Section Description */}
        <Grid container spacing={4} justifyContent="center">
          <Grid  size={{ xs: 12, md: 8 }}>
            {" "}
            {/* Correct Grid sizing */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
                color: "text.primary",
                lineHeight: 1.7,
                mb: 4,
                textAlign: "center",
              }}
            >
              Kopek Networks was founded in 2014 with a mission to connect
              exceptional talent with leading organizations, empowering
              businesses to build high-performing teams. Over the years, we’ve
              built a reputation for trust, expertise, and dedication, allowing
              us to support our clients with tailored recruitment solutions that
              meet their unique needs. From our humble beginnings, we have grown
              into a trusted partner, providing top-tier recruitment services
              across various industries.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
                color: "text.primary",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              Today, we continue to innovate in the talents acquisition space,
              offering customized recruitment solutions to businesses of all
              sizes. Our commitment to excellence ensures that companies stay
              ahead by securing the best talents, helping them thrive in a
              competitive and ever-evolving business environment.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurStorySection;
