import React from "react";
import { Box, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./sections/Footer";
import "../detail.css";
export default function DetailLayout({ children }) {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        className="project-document"
        sx={{
          "--document-bg": theme.palette.background.main,
          "--document-ink": theme.palette.textMain.main,
          "--document-muted": theme.palette.textSecondary.main,
          "--document-accent": theme.palette.buttonHover.main,
          "--document-button-text": theme.palette.textMain.main,
          "--document-line": theme.palette.backgroundSecondary.main + "70",
          backgroundColor: theme.palette.background.main,
          color: theme.palette.textMain.main,
          minHeight: "100vh",
        }}
      >
        {children}
        <Footer />
      </Box>
    </>
  );
}
