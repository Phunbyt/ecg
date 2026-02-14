"use client";

import React from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Timeline, TrendingUp, Groups, Public } from "@mui/icons-material";

const OurStorySection = () => {
  const milestones = [
    {
      year: "2014",
      title: "Foundation",
      description:
        "ECG Life Sciences was founded with a vision to revolutionize life sciences recruitment",
      icon: Timeline,
    },
    {
      year: "2017",
      title: "Expansion",
      description:
        "Expanded services to cover clinical trials, regulatory affairs, and quality assurance",
      icon: TrendingUp,
    },
    {
      year: "2020",
      title: "Growth",
      description:
        "Reached 75,000+ qualified life sciences professionals in our network",
      icon: Groups,
    },
    {
      year: "2024",
      title: "Global Reach",
      description:
        "Serving 500+ biotech and pharma companies across 30+ therapeutic areas worldwide",
      icon: Public,
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
            OUR JOURNEY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            A Decade of Excellence
          </Typography>
        </Box>

        {/* Story Content */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
                mb: 3,
              }}
            >
              ECG Life Sciences was founded in 2014 by a team of life sciences
              professionals who recognized a critical gap in the industry: the
              difficulty of finding qualified, specialized talent for complex
              scientific roles. What started as a small recruitment firm has
              grown into a trusted partner for hundreds of biotech,
              pharmaceutical, and medical device companies worldwide.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
              }}
            >
              Our deep understanding of regulatory requirements, clinical trial
              operations, and drug development processes sets us apart. We don't
              just match resumes to job descriptions—we understand the science,
              the challenges, and the stakes involved in bringing life-saving
              therapies to patients.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
              alt="Life Sciences Laboratory"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* Timeline */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
          }}
        >
          Our Milestones
        </Typography>
        <Grid container spacing={4}>
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    p: 3,
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
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ color: "white", fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "secondary.main",
                      mb: 1,
                    }}
                  >
                    {milestone.year}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {milestone.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {milestone.description}
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

export default OurStorySection;
