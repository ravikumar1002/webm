import AddIcon from "@mui/icons-material/Add";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";

export const ArtistsCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 150,
        position: "relative",
        width: "auto",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1623984109227-443f400446f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="Paella dish"
      />
      <CardActions
        sx={{
          position: "absolute",
          top: 0,
          left: "60%",
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{ borderRadius: "30%", backgroundColor: "gray", color: "white" }}
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
