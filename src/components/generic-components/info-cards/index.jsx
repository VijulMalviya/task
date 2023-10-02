import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ userDetails }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="infoCard mt-18"
        component={Link}
        to={`/userdetails/${userDetails.id}`}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          className="user-info"
        >
          <Avatar
            src={userDetails.user_avatar}
            alt={`user-image-${userDetails.name}`}
          />
          <Typography className="user-name">{userDetails.name}</Typography>
        </Stack>
        <Typography className="user-post-count">
          {userDetails.posts.length <= 1 ? "Post" : "Posts"} : <span>{userDetails.posts.length}</span>
        </Typography>
      </Stack>
    </>
  );
};

export default InfoCard;
