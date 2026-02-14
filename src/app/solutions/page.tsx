import { Container, Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SolutionsGrid from "../../components/solutions/SolutionsGrid";
import ProcessSection from "../../components/solutions/ProcessSection";
import IndustriesSection from "../../components/solutions/IndustriesSection";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 16 },
          overflow: "hidden",
        }}
      >
        {/* Background with Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80)",
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
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
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
                TAILORED SOLUTIONS
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
                Life Sciences Staffing Solutions That Drive Results
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 5,
                  maxWidth: "700px",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "rgba(255, 255, 255, 0.95)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                From clinical trials to regulatory submissions, we provide the
                specialized talent you need to accelerate drug development and
                bring life-saving therapies to market faster.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  href="/contact"
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
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  href="#solutions"
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
                  Explore Solutions
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <SolutionsGrid />

      {/* Process Section */}
      <ProcessSection />

      {/* Industries Section */}
      <IndustriesSection />

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
              Ready to Build Your Life Sciences Team?
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
              Let's discuss how ECG Life Sciences can help you find the
              specialized talent you need to achieve your research and
              development goals.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                href="/contact"
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
                Schedule Consultation
              </Button>
              <Button
                variant="outlined"
                href="/careers"
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
                Join Our Network
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
