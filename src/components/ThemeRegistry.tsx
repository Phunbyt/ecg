"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B7A9F", // Teal blue from logo
      light: "#4DA8C7",
      dark: "#085A75",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7FB539", // Green from logo
      light: "#A5CC6B",
      dark: "#5F8829",
      contrastText: "#fff",
    },
    error: {
      main: "#C41E3A", // Red from logo heartbeat
      light: "#D04A5F",
      dark: "#8F1529",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#5A6C7D",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
