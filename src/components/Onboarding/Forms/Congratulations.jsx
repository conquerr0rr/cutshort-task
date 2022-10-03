import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../common/Button/CommonButton";
import formStyles from "./forms.module.css";
import DoneIcon from "@mui/icons-material/Done";
const Congratulations = ({ handleNext }) => {
  return (
    <>
      <Box mt={10} display={"flex"}>
        <Grid
          display={"flex"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          className={formStyles.congratulationsIcon}
        >
          <DoneIcon />
        </Grid>
      </Box>
      <Typography mt={5} variant={"h4"} className={formStyles.commonHeading}>
        Congratulations, Eren!
      </Typography>
      <Typography variant={"body1"} className={formStyles.commonSubheading}>
        You have completed onboarding, you can start using the Eden!
      </Typography>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <CommonButton
          label={"Launch Eden"}
          variant={"solid"}
          mt={3}
          mb={5}
          width={"400px"}
          callback={handleNext}
        />
      </Box>
    </>
  );
};

export default Congratulations;
