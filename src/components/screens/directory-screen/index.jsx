import { Box, Container } from "@mui/material";
import React from "react";
import SharedHeader from "../../generic-components/shared-header";
import InfoCard from "../../generic-components/info-cards";
import { user } from "../../../constant";

const DirectoryScreen = () => {
  return (
    <Container className="app-container">
        <SharedHeader title="Directories" />

        <Box className="directories-container">
          {
            user.map((userInfo,index) => <Box key={index}><InfoCard userDetails={userInfo} /> </Box> )
          }
        </Box>
      </Container>
  );
};

export default DirectoryScreen;
