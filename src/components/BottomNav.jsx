import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import {CalendarMonth, Today} from "@mui/icons-material";
// import Today from "@mui/icons-material";
export default function BottomNav() {
    const [value , setValue] = React.useState("");
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigationAction
            sx={{width: "100%"}}
            value={value}
            onChange={handleChange}
        >
        <BottomNavigationAction
            label="Incoming"
            value="todo"
            icon={<RestoreIcon/>}
        />
        <BottomNavigationAction
            label="Today"
            value="today"
            icon={<Today/>}
          />
        <BottomNavigationAction
            label="Calendar"
            value="calendar"
            icon={<CalendarMonth/>}
        />


        </BottomNavigationAction>
        )


}
