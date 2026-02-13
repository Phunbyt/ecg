import { Box, Container, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Correct Grid import

import LanguageIcon from "@mui/icons-material/Language";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SpeedIcon from "@mui/icons-material/Speed";
import Groups2Icon from "@mui/icons-material/Groups2";
import RecyclingIcon from "@mui/icons-material/Recycling";
import MediationIcon from "@mui/icons-material/Mediation";

const IconBlocksSection = () => {
  const iconBlocksData = [
    {
      icon: LanguageIcon,
      title: "Talent Success",
      description:
        "Manage project kickoff, onboarding, payment, and talent administration.",
      color: "#D8CEFB",
    },
    {
      icon: CastForEducationIcon,
      title: "Training and Upskilling",
      description:
        "Kopek Learning Community offers numerous skills development programs.",
      color: "#FECDD9",
    },
    {
      icon: SpeedIcon,
      title: "Customer Success",
      description:
        "Your customer success partner is your primary point of contact.",
      color: "#FFE69D",
    },
    {
      icon: Groups2Icon,
      title: "Extensive Resources",
      description:
        "Hiring in untapped markets requires experience. You can leverage ours.",
      color: "#C1EAFC",
    },
    {
      icon: RecyclingIcon,
      title: "Flexible Engagement Models",
      description:
        "Bring talent on board for as long or little as you require.",
      color: "#FED59F",
    },
    {
      icon: MediationIcon,
      title: "Strategic Support Services",
      description:
        "Get the help you need with every conceivable engagement activity.",
      color: "#D5D4D6",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        component="img"
        src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6643169e35175e39a7106875_pattern-02.svg"
        alt="Background Pattern"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.1, // Adjust opacity as needed
        }}
      />

      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          Leave the groundwork to us
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "text.secondary",
            position: "relative",
            zIndex: 1,
          }}
        >
          We provide premium customer and talent support services so you can
          focus on optimizing the success of each and every project.
        </Typography>

        {/* Grid of Icon Blocks */}
        <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
          {iconBlocksData.map((item, index) => {
            const IconComponent = item.icon; // Get the icon component
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: "background.default",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main", // Icon color
                    }}
                  >
                    <IconComponent sx={{ fontSize: 48, color: item.color }} />{" "}
                    {/* Render the icon */}
                  </Box>

                  {/* Title */}
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

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default IconBlocksSection;
