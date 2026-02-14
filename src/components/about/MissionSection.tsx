"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Science,
  Biotech,
  HealthAndSafety,
  Psychology,
  Diversity3,
} from "@mui/icons-material";

const MissionSection = () => {
  const missionValues = [
    {
      icon: Science,
      title: "Scientific Excellence",
      description:
        "We prioritize deep scientific expertise and regulatory knowledge, ensuring every placement meets the rigorous standards of life sciences innovation.",
    },
    {
      icon: Biotech,
      title: "Innovation Focus",
      description:
        "We champion breakthrough thinking and cutting-edge research, connecting talent that drives the next generation of therapies and diagnostics.",
    },
    {
      icon: HealthAndSafety,
      title: "Patient-Centric",
      description:
        "Every placement we make ultimately serves patients. We understand that our work contributes to better health outcomes worldwide.",
    },
    {
      icon: Psychology,
      title: "Integrity & Compliance",
      description:
        "We uphold the highest ethical standards, ensuring all candidates meet GxP requirements and regulatory compliance expectations.",
    },
    {
      icon: Diversity3,
      title: "Collaborative Partnership",
      description:
        "We build lasting relationships with clients and candidates, fostering a collaborative ecosystem that accelerates scientific progress.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Mission Content */}
          <Grid size={{ xs: 12, md: 6 }}>
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
              OUR MISSION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
                fontWeight: 700,
                mb: 4,
              }}
            >
              Empowering Life Sciences Innovation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.secondary",
                mb: 4,
              }}
            >
              At ECG Life Sciences, we bridge the gap between groundbreaking
              research and the exceptional talent needed to bring it to life.
              Our mission is to accelerate drug development, advance clinical
              research, and improve patient outcomes by connecting life sciences
              organizations with professionals who possess the expertise,
              passion, and dedication to make a difference.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              From early-stage biotech startups to global pharmaceutical
              leaders, we understand the unique challenges of the life sciences
              industry and provide tailored staffing solutions that drive
              success.
            </Typography>
          </Grid>

          {/* Values Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                bgcolor: "grey.50",
                borderRadius: 3,
                p: 4,
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: "text.primary",
                }}
              >
                Our Core Values
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {missionValues.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 2,
                          p: 1.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: 48,
                          minHeight: 48,
                        }}
                      >
                        <IconComponent sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            color: "text.secondary",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionSection;
