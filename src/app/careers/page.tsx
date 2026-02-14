"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Science,
  Assignment,
  VerifiedUser,
  Biotech,
  Description,
  ManageAccounts,
  WorkOutline,
  TrendingUp,
  School,
  HealthAndSafety,
  Groups,
  EmojiObjects,
} from "@mui/icons-material";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Clinical Research Associate",
      location: "Remote / Hybrid",
      type: "Full-time",
      level: "Mid-Senior",
      description:
        "Monitor clinical trial sites, ensure GCP compliance, and maintain study documentation for Phase II-III oncology trials.",
      requirements: [
        "GCP Certification",
        "3+ years CRA experience",
        "Oncology preferred",
      ],
      icon: Science,
    },
    {
      title: "Regulatory Affairs Specialist",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "Lead IND and NDA submissions, interact with FDA, and provide regulatory strategy for drug development programs.",
      requirements: [
        "RAC Certification",
        "5+ years regulatory",
        "FDA submissions",
      ],
      icon: Assignment,
    },
    {
      title: "Quality Assurance Manager",
      location: "Austin, TX",
      type: "Full-time",
      level: "Senior",
      description:
        "Oversee GMP compliance, manage audit programs, and lead quality systems for biologics manufacturing.",
      requirements: [
        "GMP/GLP expertise",
        "Audit experience",
        "Biologics background",
      ],
      icon: VerifiedUser,
    },
    {
      title: "Senior Scientist - Drug Discovery",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "Lead target identification and validation projects using CRISPR, proteomics, and high-throughput screening.",
      requirements: [
        "PhD in Biology/Chemistry",
        "5+ years industry",
        "CRISPR experience",
      ],
      icon: Biotech,
    },
    {
      title: "Medical Writer",
      location: "Remote",
      type: "Contract",
      level: "Mid-Senior",
      description:
        "Develop clinical study reports, regulatory documents, and scientific publications for cardiovascular programs.",
      requirements: [
        "PharmD or PhD",
        "Medical writing",
        "Cardiovascular knowledge",
      ],
      icon: Description,
    },
    {
      title: "Clinical Project Manager",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description:
        "Manage multi-site clinical trials from start-up through close-out, ensuring on-time and on-budget delivery.",
      requirements: [
        "PMP Certification",
        "Clinical trials",
        "Budget management",
      ],
      icon: ManageAccounts,
    },
  ];

  const benefits = [
    {
      icon: WorkOutline,
      title: "Flexible Work Arrangements",
      description:
        "Remote, hybrid, or on-site options. We support work-life balance that fits your lifestyle.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, performance bonuses, and equity opportunities for top performers.",
    },
    {
      icon: School,
      title: "Continuous Learning",
      description:
        "Access to conferences, certifications, and training programs to advance your career.",
    },
    {
      icon: HealthAndSafety,
      title: "Comprehensive Benefits",
      description:
        "Health, dental, vision insurance, 401(k) matching, and generous PTO policies.",
    },
    {
      icon: Groups,
      title: "Collaborative Culture",
      description:
        "Work with brilliant scientists and professionals who are passionate about improving patient lives.",
    },
    {
      icon: EmojiObjects,
      title: "Impactful Work",
      description:
        "Contribute to life-saving therapies and breakthrough treatments that make a real difference.",
    },
  ];

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 16 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(11, 122, 159, 0.9) 0%, rgba(127, 181, 57, 0.9) 100%)",
            },
          }}
        />

        <Container maxWidth="lg">
          <Box sx={{ maxWidth: "800px" }}>
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
              CAREERS AT ECG LIFE SCIENCES
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.75rem" },
                lineHeight: 1.2,
                color: "white",
              }}
            >
              Shape the Future of Healthcare
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 5,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Join a team of passionate professionals dedicated to connecting
              brilliant minds with breakthrough opportunities in life sciences.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                href="#openings"
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
                View Open Positions
              </Button>
              <Button
                variant="outlined"
                href="#benefits"
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
                  },
                }}
              >
                Why ECG?
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Job Openings Section */}
      <Box
        id="openings"
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
              CURRENT OPPORTUNITIES
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Open Positions
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
              Explore exciting opportunities to advance your career in life
              sciences
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {jobOpenings.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
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
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "primary.light",
                            borderRadius: 2,
                            p: 1.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IconComponent
                            sx={{ color: "primary.main", fontSize: 28 }}
                          />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            {job.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              flexWrap: "wrap",
                              mb: 2,
                            }}
                          >
                            <Chip label={job.location} size="small" />
                            <Chip
                              label={job.type}
                              size="small"
                              color="primary"
                            />
                            <Chip
                              label={job.level}
                              size="small"
                              variant="outlined"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: "text.secondary",
                          lineHeight: 1.7,
                        }}
                      >
                        {job.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.primary",
                        }}
                      >
                        Key Requirements:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {job.requirements.map((req, idx) => (
                          <Chip
                            key={idx}
                            label={req}
                            size="small"
                            sx={{
                              bgcolor: "grey.100",
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        href="/apply"
                        fullWidth
                        sx={{
                          py: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box
        id="benefits"
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
              BENEFITS & PERKS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Why Work With ECG?
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
              We invest in our people because they&apos;re our greatest asset
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "primary.main",
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        mb: 3,
                      }}
                    >
                      <IconComponent sx={{ color: "white", fontSize: 40 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", color: "white" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Ready to Make an Impact?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                opacity: 0.95,
              }}
            >
              Join ECG Life Sciences and help us connect brilliant minds with
              breakthrough opportunities that transform healthcare.
            </Typography>
            <Button
              variant="contained"
              href="/apply"
              sx={{
                px: 6,
                py: 2.5,
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
              Apply Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CareersPage;
