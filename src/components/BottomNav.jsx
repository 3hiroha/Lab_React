// import * as React from "react";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { CalendarMonth, Today } from "@mui/icons-material";

export default function BottomNav() {
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <>
    
    <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    >
  
   
    <BottomNavigationAction label="Today" value="today" icon={<Today />} />
  <BottomNavigationAction
    label="Incoming"
    value="todo"
    icon={<RestoreIcon />}
  />
    <BottomNavigationAction
      label="Calendar"
      value="calendar"
      icon={<CalendarMonth />}
    />

</BottomNavigation>
  );
}
