// app/page.js

import { hero, pool, profile } from "../../public";
import { ArrowRight } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import
import IconBlocksSection from "../components/IconBlock";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  const carouselSlides = [
    {
      image: hero.src,
      title: "Connecting Life Sciences Talent with Breakthrough Opportunities",
      subtitle:
        "Access over 75,000 highly skilled life sciences professionals specializing in biotech, pharmaceuticals, clinical research, and medical devices. Ready to advance your mission.",
      buttonText: "Learn More",
      buttonLink: "/contact",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
      title: "Expert Teams for Clinical Research & Drug Development",
      subtitle:
        "From clinical trial management to regulatory affairs, connect with certified professionals who understand the complexities of life sciences innovation.",
      buttonText: "Get Started",
      buttonLink: "/solutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
      title: "AI-Powered Matching for Life Sciences Roles",
      subtitle:
        "Our advanced technology instantly connects you with qualified scientists, researchers, and specialists who match your exact requirements and therapeutic areas.",
      buttonText: "Discover How",
      buttonLink: "/solutions",
    },
  ];

  return (
    <Box component="main">
      {/* Hero Carousel Section */}
      <HeroCarousel slides={carouselSlides} />

      {/* Life Sciences Expertise Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
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
              SPECIALIZED TALENT
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.75rem", md: "2.75rem" },
              }}
            >
              Life Sciences Professionals Across Every Discipline
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 400,
              }}
            >
              From R&D to regulatory compliance, connect with experts who
              understand the science behind your success
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: "🧬",
                title: "Research & Development",
                description:
                  "PhD-level scientists, research associates, and lab technicians with expertise in molecular biology, genomics, and drug discovery.",
                specialties: [
                  "Molecular Biology",
                  "Biochemistry",
                  "Proteomics",
                ],
              },
              {
                icon: "🔬",
                title: "Clinical Operations",
                description:
                  "Clinical research coordinators, trial managers, and CRAs experienced in Phase I-IV trials and patient recruitment.",
                specialties: [
                  "Clinical Trials",
                  "GCP Compliance",
                  "Site Management",
                ],
              },
              {
                icon: "📋",
                title: "Regulatory Affairs",
                description:
                  "Regulatory specialists who navigate FDA, EMA, and global submissions with precision and strategic insight.",
                specialties: [
                  "IND/NDA Submissions",
                  "CMC",
                  "Global Regulations",
                ],
              },
              {
                icon: "⚕️",
                title: "Medical Affairs",
                description:
                  "Medical science liaisons, medical writers, and pharmacovigilance experts who bridge science and clinical practice.",
                specialties: ["MSL", "Medical Writing", "Safety Monitoring"],
              },
              {
                icon: "🏭",
                title: "Manufacturing & QA",
                description:
                  "Quality assurance professionals and manufacturing specialists ensuring GMP compliance and product integrity.",
                specialties: [
                  "GMP/GLP",
                  "Quality Control",
                  "Process Validation",
                ],
              },
              {
                icon: "💊",
                title: "Pharmaceutical Development",
                description:
                  "Formulation scientists, analytical chemists, and CMC experts driving drug development from bench to bedside.",
                specialties: [
                  "Formulation",
                  "Analytical Methods",
                  "Stability Studies",
                ],
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "3rem",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textAlign: "center",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: "center",
                    }}
                  >
                    {item.specialties.map((specialty, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 2,
                          py: 0.5,
                          bgcolor: "primary.light",
                          color: "primary.dark",
                          borderRadius: 2,
                          fontSize: "0.75rem",
                          fontWeight: "medium",
                        }}
                      >
                        {specialty}
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="/solutions"
              endIcon={<ArrowRight />}
              sx={{
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Explore All Specialties
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.75rem", md: "2.75rem" },
              }}
            >
              Why Life Sciences Companies Choose ECG Life Sciences
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 400,
              }}
            >
              Accelerate your research, clinical trials, and product development
              with talent that understands your science
            </Typography>
          </Box>

          <Grid container spacing={5} alignItems="stretch">
            {[
              {
                title: "Industry-Specific Expertise",
                description:
                  "Our professionals have hands-on experience in biotech, pharma, medical devices, and diagnostics. They speak your language and understand regulatory landscapes.",
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
                stats: "95% retention rate",
                icon: "🎯",
              },
              {
                title: "Rapid Deployment",
                description:
                  "From urgent clinical trial needs to critical R&D projects, we match qualified candidates within 48 hours and deploy within 2 weeks.",
                image:
                  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
                stats: "48-hour matching",
                icon: "⚡",
              },
              {
                title: "Compliance & Quality Assured",
                description:
                  "Every professional is vetted for GxP compliance, regulatory knowledge, and ethical standards. Background checks and credential verification included.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
                stats: "100% verified credentials",
                icon: "✓",
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", paddingTop: "60%" }}>
                    <CardMedia
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
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "white",
                        borderRadius: "50%",
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.75rem",
                        boxShadow: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        bgcolor: "primary.light",
                        color: "primary.dark",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.stats}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Additional Benefits Row */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={3}>
              {[
                {
                  number: "75,000+",
                  label: "Life Sciences Professionals",
                },
                {
                  number: "500+",
                  label: "Biotech & Pharma Companies Served",
                },
                {
                  number: "30+",
                  label: "Therapeutic Areas Covered",
                },
                {
                  number: "24/7",
                  label: "Global Support Available",
                },
              ].map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 2,
                      bgcolor: "grey.50",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: "primary.main",
                        mb: 1,
                        fontSize: { xs: "1.75rem", md: "2.5rem" },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: "medium",
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              endIcon={<ArrowRight />}
              sx={{
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderWidth: 2,
                "&:hover": { borderWidth: 2 },
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Icon Blocks Section */}
      <IconBlocksSection />
    </Box>
  );
}
