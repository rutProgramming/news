import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import NewsDrawer from "./NewsDrawer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            News 
          </Typography>
        </Toolbar>
      </AppBar>

      <NewsDrawer />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> 
        <Outlet />  
      </Box>
    </Box>
  );
}
