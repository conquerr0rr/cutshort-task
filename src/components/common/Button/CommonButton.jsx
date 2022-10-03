import { Box, Button } from "@mui/material";
import React from "react";

const CommonButton = ({
  mt,
  variant,
  label,
  isFullWidth,
  styles,
  callback,
  width,
  mb,
}) => {
  return (
    <Box mt={mt} mb={mb}>
      <Button
        style={{
          backgroundColor: "#664de5",
          color: "white",
          padding: 10,
          borderRadius: "5px",
          textTransform: "capitalize",
          width: width,
          ...styles,
        }}
        onClick={() => {
          callback?.();
        }}
        variant={variant}
        fullWidth={isFullWidth}
      >
        {label}
      </Button>
    </Box>
  );
};

export default CommonButton;
