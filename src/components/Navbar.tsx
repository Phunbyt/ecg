"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../public";
import { Menu, Close } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Solutions", url: "/solutions" },
    { name: "Careers", url: "/careers" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: "white",
        transition: "all 0.3s ease",
        borderBottom: trigger ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            py: { xs: 1, md: 1.5 },
          }}
        >
          {/* Logo Section */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Image
                src={logo}
                alt="ECG Life Sciences Logo"
                width={60}
                height={60}
                style={{ height: "auto", width: "60px" }}
                priority
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    lineHeight: 1.2,
                    background:
                      "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ECG Life Sciences
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                  }}
                >
                  Empowering Innovation
                </Typography>
              </Box>
            </Box>
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {menuItems.map((page) => (
              <Link
                key={page.name}
                href={page.url}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    px: 2.5,
                    py: 1,
                    position: "relative",
                    textTransform: "none",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #0B7A9F 0%, #7FB539 100%)",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      bgcolor: "rgba(11, 122, 159, 0.05)",
                      color: "primary.main",
                      "&::after": {
                        width: "70%",
                      },
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            <Button
              variant="contained"
              href="/contact"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                boxShadow: "0 4px 12px rgba(11, 122, 159, 0.25)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
                  boxShadow: "0 6px 16px rgba(11, 122, 159, 0.35)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                color: "primary.main",
                bgcolor: "rgba(11, 122, 159, 0.08)",
                "&:hover": {
                  bgcolor: "rgba(11, 122, 159, 0.15)",
                },
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              pb: 2,
              borderBottom: "2px solid rgba(11, 122, 159, 0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Image
                src={logo}
                alt="ECG Life Sciences"
                width={40}
                height={40}
                style={{ height: "auto", width: "40px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background:
                    "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ECG Life Sciences
              </Typography>
            </Box>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                color: "text.secondary",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.05)" },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <List sx={{ p: 0 }}>
            {menuItems.map((page) => (
              <ListItem key={page.name} disablePadding sx={{ mb: 1 }}>
                <Link
                  href={page.url}
                  style={{ textDecoration: "none", width: "100%" }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "rgba(11, 122, 159, 0.08)",
                        "& .MuiListItemText-primary": {
                          color: "primary.main",
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={page.name}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "text.primary",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          {/* CTA Button */}
          <Box
            sx={{ mt: 3, pt: 3, borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}
          >
            <Button
              variant="contained"
              fullWidth
              href="/contact"
              onClick={toggleDrawer(false)}
              sx={{
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                background: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
                boxShadow: "0 4px 12px rgba(11, 122, 159, 0.25)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
                  boxShadow: "0 6px 16px rgba(11, 122, 159, 0.35)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
