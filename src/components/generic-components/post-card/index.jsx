import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PostCard({ cardDetails,handleClick }) {
  const { image, post_title, content } = cardDetails;
  return (
    <Card className="card" onClick={handleClick}>
      <CardMedia
        image={image}
        title={`${cardDetails.post_title}-post`}
        className="card_image"
      />
      <CardContent>
        <Typography className="card-title">{post_title}</Typography>
        <Typography className="card-content mt-10">{content}</Typography>
      </CardContent>
    </Card>
  );
}
