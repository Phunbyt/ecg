"use client"; // Mark this component as a Client Component

import React from "react";
import { Box, Typography, Container, styled } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import

import TelegramIcon from "@mui/icons-material/Telegram";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GrassIcon from "@mui/icons-material/Grass";
import GradeIcon from "@mui/icons-material/Grade";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const MissionSection = () => {
  const MissionListItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  }));

  const missionValues = [
    {
      icon: GrassIcon, // Use GrassIcon directly
      title: "Embrace Growth",
      color: "#D8CEFB",
      description:
        "We are passionate about continuous learning and self-improvement, nurturing an environment that fosters both personal and professional development for our team members and clients.",
    },
    {
      icon: AccountTreeIcon, // Use AccountTreeIcon directly
      title: "Accountability",
      color: "#FECDD9",
      description:
        "We take responsibility for our actions and outcomes, consistently striving to deliver on our promises while acknowledging and learning from our mistakes.",
    },
    {
      icon: TelegramIcon, // Use TelegramIcon directly
      title: "High Agency",
      color: "#FFE69D",
      description:
        "We empower our team members to take initiative and make decisions, cultivating a culture of adaptability, resilience, and effective problem-solving.",
    },
    {
      icon: BubbleChartIcon, // Use BubbleChartIcon directly
      title: "Integrity & Honesty",
      color: "#C1EAFC",
      description:
        "We uphold the highest ethical standards in all our interactions, building trust through transparency, open communication, and respect for others.",
    },
    {
      icon: GradeIcon, // Use GradeIcon directly
      title: "Excellence",
      color: "#FED59F",
      description:
        "We relentlessly pursue exceptional results, setting ambitious goals and maintaining a steadfast commitment to surpassing expectations in every aspect of our work.",
    },
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
        <Grid container spacing={4}>
          {/* Sticky Image Column */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              position: { xs: "static", md: "sticky" }, // Sticky only on md and larger screens
              top: { xs: 0, md: 32 }, // Adjust top position for sticky behavior
              alignSelf: "flex-start",
            }}
          >
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/62276057f672e497e5a941d9/6461ff00376853360eb37b57_mission-img%20(1).webp"
              alt="a group of three men and a woman"
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>

          {/* Mission & Values Content Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: "3.25rem", lineHeight: 1.2, fontWeight: 700 }}
              >
                Mission & Values
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 6 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.25rem", lineHeight: 1.6 }}
              >
                We create better businesses and lives through our
                all-encompassing 360-degrees solution, managing the hiring, onboarding,
                payment, and retention process. Committed to fostering a remote
                work culture that transcends borders, we empower businesses to
                innovate and thrive in a dynamic global landscape.
                <br />
                <br />
                At Kopek Networks, our core values guide us in our quest to
                revolutionize remote hiring and create lasting impact:
              </Typography>
            </Box>

            {/* Mission Values List */}
            <Box>
              {missionValues.map((item, index) => {
                const IconComponent = item.icon; // Get the icon component
                return (
                  <MissionListItem key={index}>
                    <IconComponent
                      sx={{ width: 40, height: 40, color: item.color }} // Style the icon
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          marginBottom: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "0.875rem", lineHeight: 1.5 }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </MissionListItem>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionSection;
