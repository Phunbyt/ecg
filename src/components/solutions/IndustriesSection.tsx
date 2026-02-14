"use client";

import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Biotechnology",
      areas: [
        "Gene Therapy",
        "Cell Therapy",
        "Immunotherapy",
        "Biologics",
        "Biosimilars",
        "Vaccines",
      ],
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    },
    {
      title: "Pharmaceuticals",
      areas: [
        "Small Molecules",
        "Oncology",
        "CNS Disorders",
        "Cardiovascular",
        "Rare Diseases",
        "Generics",
      ],
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    },
    {
      title: "Medical Devices",
      areas: [
        "Diagnostics",
        "Surgical Devices",
        "Implantables",
        "Wearables",
        "Digital Health",
        "IVD",
      ],
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    },
    {
      title: "Contract Research",
      areas: [
        "CRO Services",
        "CMO/CDMO",
        "Preclinical",
        "Clinical Trials",
        "Lab Services",
        "Consulting",
      ],
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
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
            INDUSTRIES WE SERVE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Deep Expertise Across Life Sciences
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              fontSize: "1.1rem",
              fontWeight: 400,
            }}
          >
            We understand the unique challenges and regulatory requirements of
            each sector, providing talent that speaks your language
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 400,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    "& .overlay": {
                      bgcolor: "rgba(11, 122, 159, 0.85)",
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={industry.image}
                  alt={industry.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(11, 122, 159, 0.75)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {industry.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {industry.areas.map((area, idx) => (
                      <Chip
                        key={idx}
                        label={area}
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          color: "white",
                          fontWeight: 500,
                          backdropFilter: "blur(10px)",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.3)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustriesSection;
