import { Box, Card, CardMedia, Typography } from "@mui/material";

import { image1 } from "../../assets/image/DemoImg";

export const SuggestionCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "15rem",
        width: "auto",
        height: "10rem",
      }}
    >
      <CardMedia
        component="img"
        image={image1}
        alt="Iron man"
        sx={{
          objectFit: "contain",
          width: "50%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "15rem",
          width: "auto",
          height: "10rem",
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: "900" }}
          >
            Movies Name
          </Typography>
          <Typography variant="body2" display="block">
            Movie type
          </Typography>
        </div>

        <div>
          <Typography
            variant="subtitle2"
            display="block"
            sx={{ fontWeight: "900" }}
          >
            rating
          </Typography>
        </div>
      </Box>
    </Card>
  );
};
