import { Button } from "@mui/material";
import React from "react";
import "./style.css";

const SettingsButton = ({ value }) => {
  return (
    <Button className="settings__section_btn" variant="text">
      {value}
    </Button>
  );
};

export default SettingsButton;
