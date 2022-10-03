import { Box, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../../common/Button/CommonButton";
import CommonInput from "../../common/Input/CommonInput";
import formStyles from "./forms.module.css";

const Welcome = ({ handleNext }) => {
  return (
    <>
      <Typography mt={10} variant={"h4"} className={formStyles.commonHeading}>
        Welcome! First things first...
      </Typography>
      <Typography variant={"body1"} className={formStyles.commonSubheading}>
        You can always change them later.
      </Typography>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <CommonInput
          variant={"outlined"}
          size={"md"}
          placeholder={"Steve Jobs"}
          label={"Full Name"}
          mt={2}
          width={"400px"}
          styles={{ borderRadius: "110px !important" }}
        />
        <CommonInput
          variant={"outlined"}
          size={"md"}
          placeholder={"Steve"}
          label={"Display Name"}
          mt={3}
          width={"400px"}
          styles={{ borderRadius: "110px !important" }}
        />
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

export default Welcome;
