import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CheckCircle, Close } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

interface BasicModalProps {
  openModal: boolean;
  handleClose: () => void;
  mainText: string;
  subText: string;
  type?: "success" | "error" | "info";
}

export default function BasicModal({
  openModal,
  handleClose,
  mainText,
  subText,
  type = "success",
}: BasicModalProps) {
  const getIconColor = () => {
    switch (type) {
      case "success":
        return "secondary.main";
      case "error":
        return "error.main";
      case "info":
        return "primary.main";
      default:
        return "secondary.main";
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: 500 },
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 0,
          outline: "none",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.500",
            "&:hover": {
              bgcolor: "grey.100",
            },
          }}
        >
          <Close />
        </IconButton>

        {/* Icon Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 5,
            pb: 3,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: `${getIconColor()}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 8px 24px ${type === "success" ? "rgba(127, 181, 57, 0.3)" : "rgba(11, 122, 159, 0.3)"}`,
            }}
          >
            <CheckCircle sx={{ fontSize: 48, color: "white" }} />
          </Box>
        </Box>

        {/* Content Section */}
        <Box sx={{ px: 4, pb: 4, textAlign: "center" }}>
          <Typography
            id="modal-title"
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "text.primary",
            }}
          >
            {mainText}
          </Typography>
          <Typography
            id="modal-description"
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.7,
              mb: 4,
              fontSize: "1.05rem",
            }}
          >
            {subText}
          </Typography>

          {/* Action Button */}
          <Button
            variant="contained"
            onClick={handleClose}
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              background: "linear-gradient(135deg, #0B7A9F 0%, #7FB539 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #085A75 0%, #5F8829 100%)",
                transform: "translateY(-2px)",
                boxShadow: 4,
              },
              transition: "all 0.3s ease",
            }}
          >
            Got it, thanks!
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
