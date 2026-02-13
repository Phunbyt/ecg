import { Container, Box, SvgIcon, Typography, Button } from "@mui/material";
import { solutions } from "../../../public";
import WhySection from "../../components/solutions/WhySection";

export default function Page() {
  return (
    <>
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
            backgroundImage: `url(${solutions.src})`,
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
            Work the Way That Works for You
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "800px",
              fontSize: { xs: ".7rem", sm: ".9rem", md: "1.1rem" }, // Responsive font size
            }}
          >
            Your full-service partner to streamline talenst acquisition, hiring,
            onboarding, payroll, retention, and compliance. Add to existing
            teams. Close skill gaps. Or have Kopek manage your project entirely.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/contact"
            sx={{
              px: 4,
              py: 2,
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive button text
            }}
          >
            Learn More
          </Button>
        </Container>
      </Box>

      <WhySection />
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
              Build the desired team of the future with Kopek
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
    </>
  );
}
