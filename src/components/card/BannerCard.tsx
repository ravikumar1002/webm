import {
  Box,
  CardActions,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const BannerCard = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        maxHeight: "350px",
        minHeight: "349px",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <Box
        component="img"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab1bfca3-b1c8-494d-9323-84c47d178a56/d9he7xy-105491b5-78bd-42f8-9146-704c8a119f33.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiMWJmY2EzLWIxYzgtNDk0ZC05MzIzLTg0YzQ3ZDE3OGE1NlwvZDloZTd4eS0xMDU0OTFiNS03OGJkLTQyZjgtOTE0Ni03MDRjOGExMTlmMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BYnZ7LCcNxRGDtAw85ToBLzd3_ACTbzhEU2fvmJtGi8"
        alt="Paella dish"
        width="100%"
        height="100%"
        sx={{
          minHeight: "inherit",
          borderRadius: "20px",
        }}
      ></Box>

      <CardActions
        sx={{
          position: "absolute",
          top: "50%",
          left: "90%",
          transform: "translatey(-50%)",
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{
            borderRadius: "30%",
            backgroundColor: "gray",
            color: "white",
            transform: "translateX(-35px)",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </CardActions>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          left: "10%",
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "900" }}>
          Artists Name
        </Typography>
        <Typography variant="caption" display="block">
          +12 movies
        </Typography>
      </Box>
    </Container>
  );
};
