"use client";

import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "60vh", md: "80vh" },
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            display: "flex",
            alignItems: "center",
            color: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: "800px",
                fontSize: { xs: ".7rem", sm: ".9rem", md: "1.1rem" },
              }}
            >
              {slide.subtitle}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={slide.buttonLink}
              sx={{
                px: 4,
                py: 2,
                fontWeight: "bold",
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              {slide.buttonText}
            </Button>
          </Container>
        </Box>
      ))}

      {/* Navigation Arrows */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: "absolute",
          left: { xs: 8, md: 24 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          color: "white",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowBackIos sx={{ ml: 1 }} />
      </IconButton>
      <IconButton
        onClick={goToNext}
        sx={{
          position: "absolute",
          right: { xs: 8, md: 24 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          color: "white",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor:
                currentSlide === index ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": { bgcolor: "white" },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
