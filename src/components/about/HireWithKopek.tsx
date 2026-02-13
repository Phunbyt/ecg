"use client"; // Mark this component as a Client Component

import React from "react";
import { Box, Typography, Container, Stack, styled } from "@mui/material";
import { keyframes } from "@mui/system";

// Keyframes for marquee animation
const marqueeAnimation = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-40%);
  }
`;

// Styled component for the animation wrapper
const AnimationWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "300px", // Default height
  [theme.breakpoints.up("xs")]: { height: "100px" }, // Mobile
  [theme.breakpoints.up("sm")]: { height: "150px" }, // Tablet
  [theme.breakpoints.up("md")]: { height: "200px" }, // Small desktop
  [theme.breakpoints.up("lg")]: { height: "250px" }, // Large desktop
}));

// Styled component for the text column
const AnimationTextCol = styled(Box)(({}) => ({
  animation: `${marqueeAnimation} 30s linear infinite`,
  display: "flex",
  flexDirection: "column",
  //   gap: theme.spacing(4), // Adjust gap between rows
}));

// Styled component for the text row
const AnimationTextRow = styled(Box)(({}) => ({
  //   display: "flex",
  //   gap: theme.spacing(4), // Adjust gap between items
}));

const HireWithKopekSection = () => {
  const roles = [
    "Program Managers",
    "Project Managers",
    "Project Coordinators",
    "Business Analyst",
    "Cloud Security Engineers",
    "Data Analysts",
    "KYC/AML/EDD Analyst",
    "IT Auditors",
    "GRC Consultants/Analyst",
  ];

  return (
    <Box
      component="section"
      sx={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack direction="row" spacing={4}>
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.75rem",
                  md: "2rem",
                  lg: "2.5rem",
                }, // Responsive font size
                lineHeight: 1.2,
                textAlign: "center",
                marginBottom: { xs: 2, sm: 3, md: 4 }, // Responsive margin bottom
              }}
            >
              Hire with Kopek:&nbsp;
            </Typography>

            {/* Animation Wrapper */}
            <AnimationWrapper>
              {/* Overlay Top */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "20%",
                  background: "linear-gradient(to bottom, white, transparent)",
                  zIndex: 2,
                }}
              />

              {/* Animation Text Column */}
              <AnimationTextCol>
                {[...Array(5)].map((_, rowIndex) => (
                  <AnimationTextRow key={rowIndex}>
                    {roles.map((role, index) => (
                      <Typography
                        key={index}
                        variant="h2"
                        sx={{
                          fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "2.5rem",
                            lg: "3.25rem",
                          }, // Responsive font size
                          lineHeight: 1.2,
                          fontWeight: 700, // Optional: Add bold font weight
                          whiteSpace: "nowrap", // Prevent text from wrapping
                        }}
                      >
                        {role}
                      </Typography>
                    ))}
                  </AnimationTextRow>
                ))}
              </AnimationTextCol>

              {/* Overlay Bottom */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "20%",
                  background: "linear-gradient(to top, white, transparent)",
                  zIndex: 2,
                }}
              />
            </AnimationWrapper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HireWithKopekSection;
