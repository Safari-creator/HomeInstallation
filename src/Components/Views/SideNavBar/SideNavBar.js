import React from 'react'
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";


function SideNavBar() {
    const [open, setOpen] = React.useState(false);
  let navItems = [
    "Dashboard",
    "Create Report",
    "Extra Pages",
    "Settings",
    { Intro: ["Profile", "Sample Report"] },
    "Realtors",
  ];
  let tempComponentArr = [
    <SendIcon />,
    <DraftsIcon />,
    <InboxIcon />,
    <SendIcon />,
    [<DraftsIcon />, <InboxIcon />, <SendIcon />],
    <InboxIcon />,
  ];

  const handleClick = () => {
    setOpen(!open);
  };
    return (
        <div>
            <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        {navItems.map((navItem, index) => {
          return (
            <>
              {console.log("arr length>>", typeof navItem)}
              <ListItemButton
                onClick={typeof navItem !== "string" ? handleClick : ""}
              >
                <ListItemIcon>
                  {/* <InboxIcon /> */}
                  {typeof navItem !== "string"
                    ? tempComponentArr[index][0]
                    : tempComponentArr[index]}
                </ListItemIcon>
                <ListItemText
                  primary={
                    typeof navItem !== "string" ? Object.keys(navItem) : navItem
                  }
                />
                {typeof navItem !== "string" ? (
                  open ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : (
                  ""
                )}
              </ListItemButton>
              {typeof navItem !== "string" ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {Object.values(navItem).map((values) => {
                    return values.map((value, index2) => {
                      return (
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              {/* <StarBorder /> */}
                              {tempComponentArr[index][index2 + 1]}
                            </ListItemIcon>
                            <ListItemText primary={value} />
                          </ListItemButton>
                        </List>
                      );
                    });
                  })}
                </Collapse>
              ) : (
                ""
              )}
            </>
          );
        })}
      </List>
        </div>
    )
}

export default SideNavBar
