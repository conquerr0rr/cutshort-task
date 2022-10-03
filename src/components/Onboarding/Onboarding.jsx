import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/images/logo.png";
import { Grid, StepConnector } from "@mui/material";
import Welcome from "./Forms/Welcome";
import Workspace from "./Forms/Workspace";
import Plan from "./Forms/Plan";
import Congratulations from "./Forms/Congratulations";
import styles from "./onboarding.module.css";
import styled from "@emotion/styled";

const FORM_STEPS = [...new Array(4)];

export const Onboarding = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getCurrentPage = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <Welcome handleNext={handleNext} />;
      case 1:
        return <Workspace handleNext={handleNext} />;
      case 2:
        return <Plan handleNext={handleNext} />;
      case 3:
        return <Congratulations handleNext={handleNext} />;

      default:
        return <Welcome handleNext={handleNext} />;
    }
  };

  return (
    <Box className={styles.onboarding}>
      <Box display={"flex"} justifyContent="center" pb={5}>
        <img src={Logo} alt="Eden" className={styles.onboardingImg} />
      </Box>
      <Stepper activeStep={activeStep} className={styles.formStepper}>
        {FORM_STEPS.map((label, index) => {
          return (
            <Step key={index}>
              <div
                className={
                  activeStep >= index ? styles.stepIconActive : styles.stepIcon
                }
              >
                {index + 1}
              </div>
              {/* <StepLabel>{label}</StepLabel> */}
            </Step>
          );
        })}
      </Stepper>
      {activeStep === FORM_STEPS.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All FORM_STEPS completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>{getCurrentPage(activeStep)}</React.Fragment>
      )}
    </Box>
  );
};

export default Onboarding;
