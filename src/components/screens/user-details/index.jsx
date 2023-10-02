import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SharedHeader from "../../generic-components/shared-header";
import { useParams } from "react-router-dom";
import { user } from "../../../constant";
import PostDialoge from "../../dialoge/post-dialoge";
import { BackButton } from "../../generic-components/buttons";
import NoData from "../../generic-components/no-data";

const UserDetail = () => {
  const { id } = useParams();

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    filterProfileById(id);
  }, []);

  const filterProfileById = (idToFilter) => {
    const selectedUser = user.find((item) => item.id === Number(idToFilter));
    setFilteredData(selectedUser);
  };
  console.log(filteredData);
  return (
    <Container className="app-container">
      {!filteredData ? (
        <NoData title="User not found !" />
      ) : (
        <>
          <BackButton />
          <SharedHeader title={`Hey ${filteredData?.name} !`} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ sm: "center", xs: "flex-start" }}
            className="user-details mt-30"
            spacing={4}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                src={filteredData?.user_avatar}
                alt={`user-image-${filteredData?.name}`}
                className="user_image"
              />
              <Box>
                <Typography className="heading">
                  {filteredData?.name}{" "}
                </Typography>
                <Typography className="subHeading">
                  @{filteredData?.username}
                </Typography>
                <Typography className="subHeading success-text">
                  "{filteredData?.catch_phrase}"
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="column"
              alignItems={{ xs: "flex-start", sm: "flex-end" }}
            >
              <Typography className="subHeading">
                {filteredData?.address}{" "}
              </Typography>
              <Typography className="subHeading">
                {filteredData?.email}
              </Typography>
              <Typography className="subHeading">
                {filteredData?.phone_number}{" "}
              </Typography>
            </Stack>
          </Stack>
          <SharedHeader title={`Posts (${filteredData?.posts.length})`} />
          {filteredData?.posts.length > 0 ? (
            <>
              <Box className="user-posts mt-30">
                <Grid container spacing={2}>
                  {filteredData?.posts.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <PostDialoge postDetails={post} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          ) : (
            <NoData
              title={`Sorry, we couldn't find any posts from ${filteredData?.name}`}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default UserDetail;
