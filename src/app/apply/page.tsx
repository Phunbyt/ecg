/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import
import { contact } from "../../../public";
import Link from "next/link";
import { sendEmail, sendUserEmail } from "@/config/ses.config";
import BasicModal from "@/components/Modal";

const ContactUsPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const fields = React.useMemo(() => ["fullName", "email", "phoneNumber", "message"], []);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update form data
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate email in real-time
    if (name === "email") {
      const isValidEmail = emailRegex.test(value);
      setError((prevState) => ({
        ...prevState,
        email: !isValidEmail,
      }));
    } else {
      // Clear error for other fields when they are updated
      setError((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      setIsLoading(true);

      // Validate all fields
      let hasError = false;
      const newErrors: any = { ...error };

      fields.forEach((field) => {
        const value = (data as any)[field];

        if (field === "email") {
          const isValidEmail = emailRegex.test(value);
          newErrors.email = !isValidEmail;
          if (!isValidEmail) hasError = true;
        }

        if (value === "") {
          newErrors[field] = true;
          hasError = true;
        }
      });

      // Update error state
      console.log({ newErrors, hasError });

      setError(newErrors);
      setIsError(hasError);

      // If no errors, proceed with submission
      if (!hasError) {
        setOpenModal(true);
        await sendEmail(data);
        await sendUserEmail(data);

        // Reset form data
        setData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error during submission:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const isEmpty = fields.map((field: string) => {
      const check = (data as any)[field];

      return check;
    });

    if (isEmpty.some((val: boolean) => !val)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [data, fields]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      {/* Hero Section */}
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
            backgroundImage: `url(${contact.src})`,
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
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "800px",
              fontSize: { xs: ".7rem", sm: ".9rem", md: "1.1rem" }, // Responsive font size
            }}
          >
            We’d love to hear from you! Reach out to us for any inquiries or
            feedback.{" "}
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Information Section */}
      <Container maxWidth="lg" sx={{ marginTop: 8, marginBottom: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            {/* Correct grid sizing */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Send Us a Message
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit} // Add onSubmit handler
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                name="fullName"
                value={data.fullName}
                error={error.fullName}
                onChange={handleData}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                required
                value={data.email}
                error={error.email}
                name="email"
                onChange={handleData}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={data.phoneNumber}
                error={error.phoneNumber}
                name="phoneNumber"
                onChange={handleData}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={data.message}
                error={error.message}
                name="message"
                onChange={handleData}
              />
              <Button
                type="submit" // Keep type as "submit"
                variant="contained"
                color="primary"
                disabled={isError || isLoading}
                sx={{
                  px: 6,
                  py: 2,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                }}
              >
                {isLoading ? (
                  <Box>
                    <CircularProgress
                      sx={{
                        color: "#fff",
                      }}
                    />
                  </Box>
                ) : (
                  <Typography sx={{ fontWeight: "bold" }} component="p">
                    Send Message
                  </Typography>
                )}
              </Button>
            </Box>
          </Grid>

          {/* Company Information */}
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            {/* Correct grid sizing */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Our Office
            </Typography>
            <Card
              sx={{
                backgroundColor: "background.default",
                padding: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  Headquarters
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  9304 Forest Lane Suite 206 <br />
                  Dallas TX 75243 <br />
                  United States
                </Typography>
                <Link
                  href="tel:+18009254204"
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                      display: "block",
                      mb: 1,
                    }}
                  >
                    <strong>Phone</strong>: +1 800 925-4204
                  </Typography>
                </Link>
                <Link
                  href="mailto:info@kopeknetworks.com"
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    sx={{
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                      display: "block",
                      mb: 1,
                    }}
                  >
                    <strong>Email</strong>: info@kopeknetworks.com
                  </Typography>
                </Link>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  <strong>Business Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM
                </Typography>
              </CardContent>
            </Card>
            {/* Map */}
            <Box
              sx={{
                marginTop: 4,
                height: "300px",
                backgroundColor: "grey.300",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* Replace with an actual map component (e.g., Google Maps) */}
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.123456789012!2d-96.7383365!3d32.907952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1fe54e735b19%3A0x60238390c76795e!2s9304%20Forest%20Ln%2C%20Dallas%2C%20TX%2075243%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <BasicModal
        openModal={openModal}
        handleClose={handleCloseModal}
        mainText={"Message Received"}
        subText={
          "Thank you for contacting us. We would reach out to you shortly"
        }
      />
    </Box>
  );
};

export default ContactUsPage;
