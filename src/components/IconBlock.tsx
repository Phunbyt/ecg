import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const IconBlocksSection = () => {
  const servicesData = [
    {
      id: "clinical-trial-support",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
      title: "Clinical Trial Support",
      description:
        "End-to-end clinical operations support from protocol design to database lock. Our CRAs and coordinators ensure compliance and quality.",
      gradient: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
    },
    {
      id: "regulatory-consulting",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
      title: "Regulatory Consulting",
      description:
        "Navigate FDA, EMA, and global regulatory pathways with confidence. Expert guidance for IND, NDA, BLA, and 510(k) submissions.",
      gradient: "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
    },
    {
      id: "laboratory-services",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e1d6b4f4?w=600&q=80",
      title: "Laboratory Services",
      description:
        "Access specialized lab professionals for assay development, method validation, and analytical testing across all phases.",
      gradient: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
    },
    {
      id: "quality-assurance",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      title: "Quality Assurance",
      description:
        "GMP/GLP compliance experts who ensure your processes meet the highest standards. Audit preparation and remediation included.",
      gradient: "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
    },
    {
      id: "medical-writing",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
      title: "Medical Writing",
      description:
        "Scientific and regulatory writers who create compelling protocols, CSRs, manuscripts, and regulatory documents.",
      gradient: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
    },
    {
      id: "project-management",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
      title: "Project Management",
      description:
        "Experienced PMs who keep your drug development programs on track, on budget, and aligned with strategic objectives.",
      gradient: "linear-gradient(135deg, #7FB539 0%, #0B7A9F 100%)",
    },
  ];

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            COMPREHENSIVE SOLUTIONS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.75rem", md: "2.75rem" },
            }}
          >
            Full-Spectrum Life Sciences Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: 400,
            }}
          >
            From discovery to commercialization, we provide the specialized
            talent and expertise your projects demand
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {servicesData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                id={item.id}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: 12,
                    "& .service-image": {
                      transform: "scale(1.1)",
                    },
                    "& .gradient-overlay": {
                      opacity: 0.85,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "65%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="service-image"
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <Box
                    className="gradient-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: item.gradient,
                      opacity: 0.7,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.25rem", md: "1.4rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IconBlocksSection;
