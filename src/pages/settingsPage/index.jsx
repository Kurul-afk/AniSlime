import { Button } from "@mui/material";
import "./style.css";
import React from "react";
import SettingsButton from "../../components/SettingsButton";
import SettingsSecurity from "../settingsSecurity";

const SettingsPage = () => {
  return (
    <div className="settings">
      <div className="settings__left_panel">
        <SettingsButton value={"Безопасность"} />
      </div>
      <div className="settings__body">
        <SettingsSecurity />
      </div>
    </div>
  );
};

export default SettingsPage;
