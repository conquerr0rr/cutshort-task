import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommonButton from "../../common/Button/CommonButton";
import formStyles from "./forms.module.css";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const Plan = ({ handleNext }) => {
  const [selected, setSelected] = useState("myself");
  return (
    <>
      <Typography mt={10} variant={"h4"} className={formStyles.commonHeading}>
        How are you planning to use Eden?
      </Typography>
      <Typography variant={"body1"} className={formStyles.commonSubheading}>
        We'll streamline your setup experience accordingly.
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={3}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          columnGap={4}
        >
          <Grid
            item
            className={
              selected === "myself" ? formStyles.cardActive : formStyles.card
            }
            onClick={() => {
              setSelected("myself");
            }}
          >
            <PersonIcon />
            <Typography
              letterSpacing={0}
              variant="body1"
              fontWeight={"bold"}
              paddingY={1}
            >
              For Myself
            </Typography>
            <Typography variant="body2" color={"grey"} letterSpacing={0}>
              Write better. Think more clearly. Stay orgranized.
            </Typography>
          </Grid>
          <Grid
            item
            className={
              selected === "team" ? formStyles.cardActive : formStyles.card
            }
            onClick={() => {
              setSelected("team");
            }}
          >
            <GroupsIcon />
            <Typography
              variant="body1"
              fontWeight={"bold"}
              paddingY={1}
              letterSpacing={0}
            >
              With my team
            </Typography>
            <Typography variant="body2" color={"grey"} letterSpacing={0}>
              Wikis, docs, tasks & projects, all in one place.
            </Typography>
          </Grid>
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

export default Plan;
