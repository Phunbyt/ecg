/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Navbar.js
"use client"; // Mark as a Client Component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../public";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
} from "@mui/material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "about" },
    { name: "Solutions", url: "solutions" },
    { name: "Career", url: "careers" },
    { name: "Contact", url: "contact" },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRight: 1,
              borderColor: "grey.300",
              pr: 3,
            }}
          >
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  style={{ height: "32px", width: "auto" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    ml: 2,
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  Kopek Networks
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((page) => (
              <Link
                key={page.name}
                href={`/${page.url.toLowerCase().replace(" ", "-")}`}
                passHref
              >
                <Button
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: "text.primary" }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right" // Drawer opens from the right
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250, // Set drawer width
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((page) => (
              <ListItem key={page.name} disablePadding>
                <Link
                  href={`/${page.url.toLowerCase().replace(" ", "-")}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
