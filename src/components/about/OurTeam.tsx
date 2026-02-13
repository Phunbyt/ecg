"use client"; // Mark this component as a Client Component

import React from "react";
import { Box, Typography, Container, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import
import { ceo, coo, cfo, bdd, hcd, prc, hoo } from "../../../public";

const teamMembers = [
  {
    name: "Pete Clyburn",
    role: "CEO/President",
    image: ceo, // Replace with actual image URL
  },
  {
    name: "Wenfang Song",
    role: "Chief Operating Officer",
    image: coo, // Replace with actual image URL
  },
  {
    name: "Ashley Gray",
    role: "Chief Financial Officer",
    image: cfo, // Replace with actual image URL
  },
  {
    name: "Hakeem Viray",
    role: "Director, Business Development",
    image: bdd, // Replace with actual image URL
  },
  {
    name: "Johnson Uti",
    role: "Director, Human Capital",
    image: hcd, // Replace with actual image URL
  },
  {
    name: "Rowena Fabian",
    role: "Principal Consultant",
    image: prc, // Replace with actual image URL
  },
  {
    name: "Sharon Owens",
    role: "Head, Global Affairs",
    image: hoo, // Replace with actual image URL
  },
];

const OurTeamSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.paper",
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
          Our Team
        </Typography>

        {/* Team Members Grid */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {teamMembers.map((member, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }} // Correct grid sizing
              sx={{ textAlign: "center" }}
            >
              {/* Profile Image */}
              <Avatar
                src={member.image.src}
                alt={member.name}
                sx={{
                  width: 150,
                  height: 150,
                  margin: "0 auto", // Center the avatar
                  mb: 2,
                }}
              />

              {/* Name */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {member.name}
              </Typography>

              {/* Role */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
