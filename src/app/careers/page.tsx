"use client"; // Mark this component as a Client Component

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { fwh, wfh, hmo, lad, careers } from "../../../public";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "We are looking for a talented Frontend Developer to join our team and help us build amazing user experiences.",
      applyLink: "/apply",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our backend team to build scalable and efficient systems that power our platform.",
      applyLink: "/apply",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-time",
      description:
        "We need a creative UI/UX Designer to design intuitive and visually appealing interfaces for our products.",
      applyLink: "/apply",
    },
  ];

  const benefits = [
    {
      icon: fwh.src, // Replace with actual icon URL
      title: "Flexible Work Hours",
      description:
        "Work when you're most productive. We offer flexible work hours to suit your lifestyle.",
    },
    {
      icon: wfh.src, // Replace with actual icon URL
      title: "Remote Work",
      description:
        "Work from anywhere in the world. We are a fully remote company.",
    },
    {
      icon: hmo.src, // Replace with actual icon URL
      title: "Health Benefits",
      description:
        "We provide comprehensive health benefits to keep you and your family covered.",
    },
    {
      icon: lad.src, // Replace with actual icon URL
      title: "Learning & Development",
      description:
        "We invest in your growth with access to courses, workshops, and conferences.",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" }, // Responsive height
          display: "flex",
          alignItems: "center",
          color: "white",
          overflow: "hidden", // Ensure the overlay doesn't overflow
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${careers.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1, // Place the background image behind the overlay
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay (adjust opacity as needed)
            zIndex: 2, // Place the overlay above the background image
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
          {/* Content */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            Join Our Team
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "800px",
              fontSize: { xs: ".7rem", sm: ".9rem", md: "1.1rem" }, // Responsive font size
            }}
          >
            We’re building the future of work. Come be a part of it.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/apply"
            sx={{
              px: 4,
              py: 2,
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive button text
            }}
          >
            View Open Positions
          </Button>
        </Container>
      </Box>

      {/* Job Openings Section */}
      <Container maxWidth="lg" sx={{ marginTop: 8, marginBottom: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          Current Job Openings
        </Typography>
        <Grid container spacing={4}>
          {jobOpenings.map((job, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      marginBottom: 1,
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      marginBottom: 1,
                    }}
                  >
                    {job.location} • {job.type}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: 2,
                    }}
                  >
                    {job.description}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={job.applyLink}
                    fullWidth
                  >
                    Apply Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: { xs: 4, sm: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Why Work With Us?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src={benefit.icon}
                    alt={benefit.title}
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: 1,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1">{benefit.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "common.white",
          padding: { xs: 4, sm: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          Ready to Join Us?
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size
            marginBottom: 4,
          }}
        >
          Apply today and start your journey with us.
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="/apply"
          sx={{
            px: 6,
            py: 2,
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          View Open Positions
        </Button>
      </Box>
    </Box>
  );
};

export default CareersPage;
