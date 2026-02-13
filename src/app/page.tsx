// app/page.js

import { hero, pool, profile } from "../../public";
import { ArrowRight } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import
import IconBlocksSection from "../components/IconBlock";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  const carouselSlides = [
    {
      image: hero.src,
      title: "Connecting Life Sciences Talent with Breakthrough Opportunities",
      subtitle:
        "Access over 75,000 highly skilled life sciences professionals specializing in biotech, pharmaceuticals, clinical research, and medical devices. Ready to advance your mission.",
      buttonText: "Learn More",
      buttonLink: "/contact",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
      title: "Expert Teams for Clinical Research & Drug Development",
      subtitle:
        "From clinical trial management to regulatory affairs, connect with certified professionals who understand the complexities of life sciences innovation.",
      buttonText: "Get Started",
      buttonLink: "/solutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
      title: "AI-Powered Matching for Life Sciences Roles",
      subtitle:
        "Our advanced technology instantly connects you with qualified scientists, researchers, and specialists who match your exact requirements and therapeutic areas.",
      buttonText: "Discover How",
      buttonLink: "/solutions",
    },
  ];

  return (
    <Box component="main">
      {/* Hero Carousel Section */}
      <HeroCarousel slides={carouselSlides} />

      {/* Media Subpoints Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            Engage the talents you need, however you need them
          </Typography>
          <Grid container spacing={4} alignItems="center">
            {/* Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9132 7.08598H13.8846C10.1376 7.10031 7.08558 10.1668 7.08558 13.914C7.08558 13.9642 7.04259 14 6.99961 14C6.94946 14 6.91363 13.957 6.91363 13.914V13.8854C6.89931 10.1382 3.83295 7.08598 0.0859726 7.08598C0.0358219 7.08598 0 7.04299 0 7C0 6.94985 0.0429862 6.91402 0.0859726 6.91402H0.11463C3.86161 6.89969 6.91363 3.83316 6.91363 0.0859772C6.91363 0.0358236 6.95662 0 6.99961 0C7.04976 0 7.08558 0.0429884 7.08558 0.0859772C7.08558 3.84749 10.1448 6.91402 13.9132 6.91402C13.9634 6.91402 13.9992 6.95701 13.9992 7C14.0064 7.05015 13.9634 7.08598 13.9132 7.08598Z"
                    fill="#475653"
                  ></path>
                </svg>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }} // Responsive font size
                >
                  FILL SPECIFIC ROLES
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "2rem" }, // Responsive font size
                }}
              >
                Fill out teams or get individual contributors — all with the
                specific skills you need
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 4 }}
              >
                Kopek Networks professionals can drive your most pressing HR
                projects.
              </Typography>
              <Button
                href="/solutions"
                endIcon={<ArrowRight />}
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                Learn More
              </Button>
              {/* Grid */}
              <Grid container spacing={3} sx={{ mt: 4 }}>
                {[
                  {
                    title: "They're certified",
                    description:
                      "Everyone on our talent roster has been fully tested and carefully screened to verify their skills and experience.",
                  },
                  {
                    title: "They're experts",
                    description:
                      "You can count on our talent to bring broad expertise and deep experience.",
                  },
                  {
                    title: "They're fluent in English",
                    description:
                      "English fluency is a prerequisite. Many are multilingual.",
                  },
                  {
                    title: "They're committed",
                    description:
                      "Our talent average time with clients is 18 months or more.",
                  },
                ].map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box
                      sx={{ borderLeft: 2, borderColor: "primary.main", pl: 2 }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", md: "1.25rem" },
                        }} // Responsive font size
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* Media */}
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                src={profile.src}
                alt="Flexible Engagements"
                sx={{ borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Cards Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.75rem", md: "3rem" }, // Responsive font size
            }}
          >
            AI-powered technology ensures success
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Talent Decision Engine™",
                description:
                  "In seconds, AI matching algorithms use thousands of data points to pair the ideal professionals to your specific roles.",
                image:
                  "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665f017906055188a91e32cb_Talent%20Decision%20Engine%402x.webp",
              },
              {
                title: "Kopek Talent Cloud",
                description:
                  "Create jobs and receive instant AI-driven recommendations. Schedule interviews and hire quickly.",
                image: pool.src,
              },
              {
                title: "Kopek Connect",
                description:
                  "Instantly sync with the most popular systems. Get qualified matches to your open roles in seconds.",
                image:
                  "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/665f02ad1a0373467ab3c7cf_Integrations%402x.webp",
              },
            ].map((card, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{ borderRadius: "8px 8px 0 0", objectFit: "center" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }} // Responsive font size
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 3 }}
                    >
                      {card.description}
                    </Typography>
                    <Button
                      href="/contact"
                      endIcon={<ArrowRight />}
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Icon Blocks Section */}
      <IconBlocksSection />

      {/* Dual Action CTA Section */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            p: 2,
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              p: 3,
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <SvgIcon sx={{ width: 14, height: 15 }}>
                <path
                  d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                  fill="white"
                />
              </SvgIcon>
              <Typography variant="body2">GET STARTED</Typography>
            </Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Build the Desired team of the future with Kopek
            </Typography>
            <Button
              variant="contained"
              color="error"
              href="/contact"
              sx={{ mb: 2 }}
            >
              Hire Now
            </Button>
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c34d918de4b3cbec4a96_Group%2055020.svg"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c34d918de4b3cbec4ac4_shapev2.avif"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                display: { xs: "block", md: "none" },
              }}
            />
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              p: 3,
              bgcolor: "background.paper",
              color: "text.primary",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <SvgIcon sx={{ width: 14, height: 15 }}>
                <path
                  d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                  fill="#173B3F"
                />
              </SvgIcon>
              <Typography variant="body2">SCHEDULE A CALL</Typography>
            </Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Let us know how we can help
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              href="/contact"
              sx={{ mb: 2 }}
            >
              Schedule Now
            </Button>
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c34d918de4b3cbec4aa4_Group%2055020%20(5).svg"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
