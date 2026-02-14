"use client";

import React from "react";
import { Box, Typography, Container, Avatar, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";

const teamMembers = [
  {
    name: "Pete Clyburn",
    role: "CEO/President",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "20+ years in life sciences recruitment",
  },
  {
    name: "Wenfang Song",
    role: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Expert in clinical operations",
  },
  {
    name: "Ashley Gray",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Strategic financial leadership",
  },
  {
    name: "Hakeem Viray",
    role: "Director, Business Development",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "Biotech partnership specialist",
  },
  {
    name: "Johnson Uti",
    role: "Director, Human Capital",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Talent acquisition strategist",
  },
  {
    name: "Rowena Fabian",
    role: "Principal Consultant",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    bio: "Regulatory affairs expert",
  },
  {
    name: "Sharon Owens",
    role: "Head, Global Affairs",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    bio: "International compliance leader",
  },
];

const OurTeamSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            LEADERSHIP TEAM
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Meet Our Experts
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              fontSize: "1.1rem",
              fontWeight: 400,
            }}
          >
            Our leadership team brings decades of combined experience in life
            sciences, regulatory affairs, and talent acquisition
          </Typography>
        </Box>

        {/* Team Members Grid */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    mb: 2,
                    border: "4px solid",
                    borderColor: "primary.light",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.9rem",
                  }}
                >
                  {member.bio}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
