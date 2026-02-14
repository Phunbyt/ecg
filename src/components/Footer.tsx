// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../public";
import { Email, Phone, LocationOn, ArrowForward } from "@mui/icons-material";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a1929",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "radial-gradient(circle at 20% 50%, rgba(11, 122, 159, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top Section with CTA */}
        <Box
          sx={{
            py: 8,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  background:
                    "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready to Build Your Team?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "grey.400",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 400,
                  maxWidth: "600px",
                }}
              >
                Connect with top life sciences professionals who can drive your
                next breakthrough. Let's discuss your staffing needs today.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ textAlign: { xs: "left", md: "right" } }}
            >
              <Button
                variant="contained"
                size="large"
                href="/contact"
                endIcon={<ArrowForward />}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                  boxShadow: "0 8px 24px rgba(11, 122, 159, 0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
                    boxShadow: "0 12px 32px rgba(11, 122, 159, 0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Links Section */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Image
                    src={logo}
                    alt="ECG Life Sciences Logo"
                    width={48}
                    height={48}
                    style={{ height: "40px", width: "auto" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ ml: 2, fontWeight: "bold", color: "white" }}
                  >
                    ECG Life Sciences
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "grey.400",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    mb: 4,
                  }}
                >
                  Empowering life sciences innovation through exceptional talent
                  placement. We connect brilliant minds with breakthrough
                  opportunities.
                </Typography>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                Company
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label} style={{ marginBottom: "14px" }}>
                    <Link href={link.href} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          color: "grey.400",
                          fontSize: "0.95rem",
                          display: "inline-block",
                          position: "relative",
                          "&:hover": {
                            color: "white",
                            "&::after": {
                              width: "100%",
                            },
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: -2,
                            left: 0,
                            width: 0,
                            height: "2px",
                            background:
                              "linear-gradient(90deg, #0B7A9F 0%, #7FB539 100%)",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>

            {/* Services */}
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                Services
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {[
                  {
                    label: "Clinical Trials",
                    href: "/#clinical-trial-support",
                  },
                  { label: "Regulatory", href: "/#regulatory-consulting" },
                  { label: "Quality Assurance", href: "/#quality-assurance" },
                  { label: "Laboratory", href: "/#laboratory-services" },
                  { label: "Medical Writing", href: "/#medical-writing" },
                  { label: "Project Management", href: "/#project-management" },
                ].map((service) => (
                  <li key={service.label} style={{ marginBottom: "14px" }}>
                    <Link
                      href={service.href}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          color: "grey.400",
                          fontSize: "0.95rem",
                          display: "inline-block",
                          position: "relative",
                          "&:hover": {
                            color: "white",
                            "&::after": {
                              width: "100%",
                            },
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: -2,
                            left: 0,
                            width: 0,
                            height: "2px",
                            background:
                              "linear-gradient(90deg, #0B7A9F 0%, #7FB539 100%)",
                            transition: "width 0.3s ease",
                          },
                        }}
                      >
                        {service.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "rgba(11, 122, 159, 0.1)",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOn sx={{ color: "#0B7A9F", fontSize: 20 }} />
                  </Box>
                  <Link
                    href="https://www.google.com/maps/place/5900+Balcones+Drive+Suite+100+Austin,+TX+78731"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", flex: 1 }}
                  >
                    <Typography
                      sx={{
                        color: "grey.400",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        "&:hover": { color: "white" },
                        transition: "color 0.3s ease",
                      }}
                    >
                      5900 Balcones Drive Suite 100
                      <br />
                      Austin, TX 78731
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "rgba(11, 122, 159, 0.1)",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone sx={{ color: "#0B7A9F", fontSize: 20 }} />
                  </Box>
                  <Link
                    href="tel:+18009374435"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "grey.400",
                        fontSize: "0.9rem",
                        "&:hover": { color: "white" },
                        transition: "color 0.3s ease",
                      }}
                    >
                      1-800-937-4435
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "rgba(11, 122, 159, 0.1)",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Email sx={{ color: "#0B7A9F", fontSize: 20 }} />
                  </Box>
                  <Link
                    href="mailto:info@ecglifesciences.com"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "grey.400",
                        fontSize: "0.9rem",
                        "&:hover": { color: "white" },
                        transition: "color 0.3s ease",
                      }}
                    >
                      info@ecglifesciences.com
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "grey.500", fontSize: "0.9rem" }}
            >
              &copy; {new Date().getFullYear()} ECG Life Sciences. All rights
              reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 4 }}>
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link key={item} href="#" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "grey.500",
                      fontSize: "0.9rem",
                      "&:hover": { color: "white" },
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
