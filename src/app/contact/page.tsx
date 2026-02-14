/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { sendEmail, sendUserEmail } from "@/config/ses.config";
import BasicModal from "@/components/Modal";
import { Email, Phone, LocationOn, Schedule } from "@mui/icons-material";

const ContactUsPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    company: false,
    inquiryType: false,
    message: false,
  });

  const fields = React.useMemo(
    () => [
      "fullName",
      "email",
      "phoneNumber",
      "company",
      "inquiryType",
      "message",
    ],
    [],
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const inquiryTypes = [
    "Clinical Trial Staffing",
    "Regulatory Affairs",
    "Quality Assurance",
    "R&D Talent",
    "Medical Writing",
    "Project Management",
    "General Inquiry",
    "Partnership Opportunity",
  ];

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      const isValidEmail = emailRegex.test(value);
      setError((prevState) => ({
        ...prevState,
        email: !isValidEmail,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

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

      setError(newErrors);
      setIsError(hasError);

      if (!hasError) {
        setOpenModal(true);
        await sendEmail(data);
        await sendUserEmail(data);

        setData({
          fullName: "",
          email: "",
          phoneNumber: "",
          company: "",
          inquiryType: "",
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "1-800-937-4435",
      link: "tel:+18009374435",
    },
    {
      icon: Email,
      title: "Email",
      content: "info@ecglifesciences.com",
      link: "mailto:info@ecglifesciences.com",
    },
    {
      icon: LocationOn,
      title: "Address",
      content: "5900 Balcones Drive Suite 100, Austin, TX 78731",
      link: "https://www.google.com/maps/place/5900+Balcones+Drive+Suite+100+Austin,+TX+78731",
    },
    {
      icon: Schedule,
      title: "Business Hours",
      content: "Mon - Fri, 8:00 AM - 6:00 PM CST",
      link: null,
    },
  ];

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80)",
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
          <Box sx={{ maxWidth: "700px" }}>
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
              GET IN TOUCH
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
              Let&apos;s Build Your Life Sciences Team
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Whether you need clinical trial support, regulatory expertise, or
              R&D talent, we&apos;re here to help you find the right
              professionals.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form and Information Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: "1.1rem",
              }}
            >
              Fill out the form below and our team will get back to you within
              24 hours.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
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
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
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
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    value={data.phoneNumber}
                    error={error.phoneNumber}
                    name="phoneNumber"
                    onChange={handleData}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={data.company}
                    error={error.company}
                    name="company"
                    onChange={handleData}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    select
                    label="Inquiry Type"
                    variant="outlined"
                    fullWidth
                    required
                    value={data.inquiryType}
                    error={error.inquiryType}
                    name="inquiryType"
                    onChange={handleData}
                  >
                    {inquiryTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    required
                    value={data.message}
                    error={error.message}
                    name="message"
                    onChange={handleData}
                    placeholder="Tell us about your staffing needs, project timeline, and any specific requirements..."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                disabled={isError || isLoading}
                sx={{
                  px: 6,
                  py: 2,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                {isLoading ? (
                  <CircularProgress sx={{ color: "#fff" }} size={24} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 4,
              }}
            >
              Contact Information
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    sx={{
                      p: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: 4,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.light",
                          borderRadius: 2,
                          p: 1.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconComponent
                          sx={{ color: "primary.main", fontSize: 28 }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: "text.secondary",
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Link
                            href={info.link}
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                color: "text.primary",
                                fontWeight: 500,
                                "&:hover": {
                                  color: "primary.main",
                                },
                                transition: "color 0.3s ease",
                              }}
                            >
                              {info.content}
                            </Typography>
                          </Link>
                        ) : (
                          <Typography
                            variant="body1"
                            sx={{
                              color: "text.primary",
                              fontWeight: 500,
                            }}
                          >
                            {info.content}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Card>
                );
              })}
            </Box>

            {/* Map */}
            <Box
              sx={{
                height: "300px",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="ECG Life Sciences Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.327174800033!2d-97.7548379!3d30.341650299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2f96fffff%3A0x893fa7795b7d5f91!2sGenesis%20Business%20Solutions%20LLC%2C%205900%20Balcones%20Dr%20Suit%20100%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2sng!4v1771030504111!5m2!1sen!2sng"
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
          "Thank you for contacting ECG Life Sciences. Our team will reach out to you within 24 hours to discuss your staffing needs."
        }
      />
    </Box>
  );
};

export default ContactUsPage;
