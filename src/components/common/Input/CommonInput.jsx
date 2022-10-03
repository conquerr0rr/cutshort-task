import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CommonInput = ({
  size,
  disabled,
  label,
  placeholder,
  variant,
  isFullWidth,
  styles,
  mt,
  width,
  inputProps,
}) => {
  return (
    <Box mt={mt}>
      <Typography
        letterSpacing={-0.5}
        fontWeight={500}
        variant={"body2"}
        color={"#5a5a5a"}
        pb={1}
      >
        {label}
      </Typography>
      <TextField
        fullWidth={isFullWidth}
        size={size}
        disabled={disabled}
        InputProps={inputProps}
        placeholder={placeholder}
        sx={{ width: width, ...styles }}
        variant={variant}
      />
    </Box>
  );
};

export default CommonInput;
