import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  return (
    <Box width={"250px"}>
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        size="small"
        color="secondary"
        helperText="Please select you country"
        error
      >
        <MenuItem value="NE">Nepal</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
