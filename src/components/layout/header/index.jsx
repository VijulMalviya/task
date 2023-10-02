import { Box, Container, Stack } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Box className="Header">
        <Container>
          <Stack direction="row" className="header-container">
            Assigned Task
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
