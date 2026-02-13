// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../public";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                style={{ height: "32px", width: "auto" }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Kopek Networks
                </Typography>
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  Solutions that work
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Empowering businesses with innovative solutions tailored to your
              needs.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Career", href: "/career" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    passHref
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      sx={{
                        color: "grey.400",
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                        display: "block",
                        mb: 1,
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li>
                <Link
                  href="mailto:info@kopeknetworks.com"
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      color: "grey.400",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                      display: "block",
                      mb: 1,
                    }}
                  >
                    Email: info@kopeknetworks.com
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+18009254204"
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      color: "grey.400",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                      display: "block",
                      mb: 1,
                    }}
                  >
                    Phone: +1 800 925-4204
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/9304+Forest+Ln,+Dallas,+TX+75243,+USA/@32.907952,-96.7409114,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1fe54e735b19:0x60238390c76795e!8m2!3d32.907952!4d-96.7383365!16s%2Fg%2F11b8v4ydxz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      color: "grey.400",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                      display: "block",
                      mb: 1,
                    }}
                  >
                    Address: 9304 Forest Lane Suite 206, Dallas TX 75243 USA
                  </Typography>
                </Link>
              </li>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { icon: <Facebook />, href: "https://facebook.com" },
                { icon: <Twitter />, href: "https://twitter.com" },
                { icon: <LinkedIn />, href: "https://linkedin.com" },
                { icon: <Instagram />, href: "https://instagram.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <IconButton
                    sx={{
                      color: "grey.400",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Notice */}
        <Divider sx={{ borderColor: "grey.800", my: 4 }} />
        <Typography
          variant="body2"
          sx={{ color: "grey.400", textAlign: "center" }}
        >
          &copy; {new Date().getFullYear()} Kopek Networks. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
