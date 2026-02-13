"use client"; // Mark this component as a Client Component

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import
import { ground, staffing } from "../../../public";

const WhySection = () => {
  const services = [
    {
      image: staffing.src,
      title: "Staffing",
      description:
        "We’ll source and help you onboard top, English-speaking talent in under 21 days. Leverage our expertise to find remote talent that aligns with your culture and works in your time zone.",
      link: "/contact",
      linkText: "Talk to a recruiting expert",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62276057f672e497e5a941d9/65292a957031cb2307a9fb78_1.webp",
      title: "Direct Hire",
      description:
        "From sourcing and screening to candidate selection and onboarding, we can handle as little or as much as you need.",
      link: "/contact",
      linkText: "Start hiring",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62276057f672e497e5a941d9/65292a43262aac7019337efb_3.webp",
      title: "Payroll",
      description:
        "We assist in simplifying your remote hire payroll management process. Our comprehensive services cover everything, including tax compliance and salary disbursement, guaranteeing precise and punctual payments for your team.",
      link: "/contact",
      linkText: "Get a free consultation",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62276057f672e497e5a941d9/65292a42377b41bfb8072c4d_4.webp",
      title: "Healthcare and Benefits",
      description:
        "We help you design and manage a competitive benefits package, including healthcare, retirement plans, perks, and more.",
      link: "/contact",
      linkText: "Talk to an expert",
    },
    {
      image: ground.src,
      title: "On-The-Ground Support",
      description:
        "Expand your business into a nearshore location with ease. We cover everything, from securing office space and equipment to navigating local regulations and tapping into available resources.",
      link: "/contact",
      linkText: "Talk to a nearshoring expert",
    },
    {
      image:
        "https://cdn.prod.website-files.com/62276057f672e497e5a941d9/65292a4341d3b0f17f330fec_6.webp",
      title: "Compliance",
      description:
        "We leverage our local market expertise and boots on the ground to identify and screen the best talents, secure optimal office locations, and advise on competitive salaries and appealing benefits.",
      link: "/contact",
      linkText: "Talk to a compliance expert",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        marginTop: 10,
        marginBottom: 10,
        padding: { xs: 2, sm: 4 }, // Responsive padding
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column (Sticky) */}
          <Grid
            size={{ xs: 12, md: 6 }} // Correct grid sizing
            sx={{
              position: { md: "sticky" },
              top: { md: 32 },
              alignSelf: "flex-start",
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              {/* Section Title */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Kopek Network Solutions
              </Typography>

              {/* Button (Hidden on Mobile Landscape) */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="/contact"
                  sx={{
                    px: 4,
                    py: 2,
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "none",
                  }}
                >
                  Get a free consultation
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Column (Services List) */}
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            {/* Correct grid sizing */}
            <Box>
              {services.map((service, index) => (
                <Grid
                  key={index}
                  container
                  spacing={4}
                  sx={{ marginBottom: 6 }}
                >
                  <Box>
                    {/* Service Image */}
                    <Grid size={{ xs: 12, sm: 8 }}>
                      {" "}
                      {/* Correct grid sizing */}
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>

                    {/* Service Content */}
                    <Grid size={{ xs: 12, sm: 8 }}>
                      {" "}
                      {/* Correct grid sizing */}
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            marginBottom: 1,
                            textTransform: "capitalize",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            marginBottom: 2,
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Button
                          variant="text"
                          href={service.link}
                          sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            textTransform: "none",
                            padding: 0,
                          }}
                        >
                          {service.linkText}
                        </Button>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhySection;
