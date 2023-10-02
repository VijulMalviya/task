import { Grid, Stack } from "@mui/material";
import React from "react";

const SharedHeader = ({title}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" className="shared-header mt-30">
            {title}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SharedHeader;
