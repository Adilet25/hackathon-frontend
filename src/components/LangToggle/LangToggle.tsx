import { MenuItem, TextField } from "@mui/material";
import "./index.css";
import styled from "@emotion/styled";

const LangToggle = () => {
  return (
    <div>
      <TextField
        className="inputRounded "
        id="outlined-select-currency"
        select
        defaultValue="RU"
        SelectProps={{ IconComponent: () => null }}>
        <MenuItem key="ru" value="RU">
          RU
        </MenuItem>
        <MenuItem key="en" value="EN">
          EN
        </MenuItem>
      </TextField>
    </div>
  );
};

export default LangToggle;
