import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../common/Button/CommonButton";
import CommonInput from "../../common/Input/CommonInput";
import formStyles from "./forms.module.css";

const Workspace = ({ handleNext }) => {
  return (
    <>
      <Typography mt={10} variant={"h4"} className={formStyles.commonHeading}>
        Let's set up a home for all your work
      </Typography>
      <Typography variant={"body1"} className={formStyles.commonSubheading}>
        You can always create a new workspace later.
      </Typography>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <CommonInput
          variant={"outlined"}
          size={"medium"}
          placeholder={"Eden"}
          label={"Workspace Name"}
          mt={5}
          width={"400px"}
          styles={{ borderRadius: "110px !important" }}
        />
        <Grid display={"flex"}>
          <CommonInput
            variant={"outlined"}
            size={"medium"}
            placeholder={"www.eden.com/"}
            label={"Workspace URL(Optional)"}
            mt={3}
            disabled
            width={"170px"}
            styles={{
              borderRight: "none !important",
              backgroundColor: "#ededed !important",
            }}
          />
          <CommonInput
            variant={"outlined"}
            size={"medium"}
            placeholder={"Example"}
            label={" "}
            mt={3}
            width={"230px"}
            styles={{ borderLeft: "none !important" }}
          />
        </Grid>
        <CommonButton
          label={"Create Workspace"}
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

export default Workspace;
