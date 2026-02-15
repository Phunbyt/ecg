"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Science,
  Assignment,
  VerifiedUser,
  Biotech,
  Description,
  ManageAccounts,
} from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: Science,
      title: "Clinical Trial Staffing",
      description:
        "CRAs, clinical coordinators, data managers, and site personnel for Phase I-IV trials. GCP-certified professionals ready to deploy within 48 hours.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    },
    {
      icon: Assignment,
      title: "Regulatory Affairs",
      description:
        "FDA, EMA, and global regulatory experts for IND, NDA, BLA, and 510(k) submissions. Experienced in CMC, clinical, and post-market compliance.",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    },
    {
      icon: VerifiedUser,
      title: "Quality Assurance",
      description:
        "GMP/GLP compliance specialists, quality control analysts, and validation experts. Audit preparation and remediation support included.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    },
    {
      icon: Biotech,
      title: "R&D Talent",
      description:
        "PhD scientists, research associates, and lab technicians across molecular biology, biochemistry, and drug discovery platforms.",
      image:
        "https://res.cloudinary.com/dglai7bet/image/upload/v1771164052/samples/cup-on-a-table.jpg",
    },
    {
      icon: Description,
      title: "Medical Writing",
      description:
        "Scientific writers for protocols, CSRs, regulatory documents, manuscripts, and medical communications. PharmD and PhD-level expertise.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
    },
    {
      icon: ManageAccounts,
      title: "Project Management",
      description:
        "PMP-certified project managers with life sciences experience. Keep your programs on track, on budget, and compliant.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    },
  ];

  return (
    <Box
      id="solutions"
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
            OUR SOLUTIONS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Specialized Staffing for Every Stage
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
            From discovery to commercialization, we provide the right talent at
            the right time to keep your programs moving forward
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "60%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={solution.image}
                      alt={solution.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "white",
                        borderRadius: 2,
                        p: 1.5,
                        boxShadow: 2,
                      }}
                    >
                      <IconComponent
                        sx={{ color: "primary.main", fontSize: 32 }}
                      />
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        fontSize: "1.4rem",
                      }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {solution.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        p: 0,
                        "&:hover": {
                          bgcolor: "transparent",
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(4px)",
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionsGrid;
