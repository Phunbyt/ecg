"use client";

import React from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Search, Assessment, CheckCircle, Rocket } from "@mui/icons-material";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirements",
      description:
        "We dive deep into your project needs, therapeutic area, and regulatory requirements to understand exactly what expertise you need.",
    },
    {
      icon: Assessment,
      number: "02",
      title: "Candidate Matching",
      description:
        "Our AI-powered platform and expert recruiters identify qualified candidates from our 75,000+ professional network within 48 hours.",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Screening & Validation",
      description:
        "Rigorous technical interviews, credential verification, and compliance checks ensure every candidate meets your standards.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Onboarding & Support",
      description:
        "Seamless integration with your team, ongoing performance monitoring, and dedicated account management throughout the engagement.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="lg">
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
            OUR PROCESS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            How We Work With You
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
            A streamlined, proven process that gets you the right talent quickly
            and efficiently
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      fontSize: "4rem",
                      fontWeight: 700,
                      color: "grey.100",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      borderRadius: "50%",
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <IconComponent sx={{ color: "white", fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection;
