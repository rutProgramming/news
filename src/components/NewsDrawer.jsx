import { Drawer, Toolbar, Box, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function NewsDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Home","World", "Business", "Technology", "Sports"].map((text) => (
            <ListItem 
              key={text} 
              component={Link} 
              to={`/${text}`} 
              content="text"
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
