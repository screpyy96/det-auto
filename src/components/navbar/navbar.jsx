import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,

} from "@material-ui/core";
import {Menu, MenuItem} from '@mui/material'
import { Stack } from "@mui/system";
import { Link } from "@reach/router";
import { useState } from "react";

import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
    
   
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "black",
  },
  navbar: {
    background: 'white',
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    color: "black",
    marginLeft: theme.spacing(3),
    "&:hover": {
      borderBottom: "1px solid black",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" className={classes.navbar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Detailing Auto Suceava
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Button>
              <Link to="/" className={classes.link}>
                Acasa
              </Link>
            </Button>
            <Button>
              <Link to="/despre" className={classes.link}>
                Despre
              </Link>
            </Button>
            <Button to="/"  className={classes.link} id="resources-button" onClick={handleClick} aria-controls={open ? 'resources-menu':undefined}
              aria-haspopup={true}
              aria-expanded={open ? "true" : undefined}
            >Servicii</Button>
            <Link to="/galerie" className={classes.link}>
              Galerie
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Stack>
              <Menu id="resources-menu" open={open}
                MenuListProps={{
                  'aria-labelledby': "resources-button"
                }}
                onClick={handleClose}
              >
                <MenuItem>
                <Link onClick={handleClose}to="/valorificare" className={classes.link}>
                 Valorificare
                </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link onClick={handleClose}to="/protejare" className={classes.link}>
                  protejare
                </Link>
                </MenuItem>
                <MenuItem>
                <Link onClick={handleClose}to="/mentinere" className={classes.link}>
                 mentinere
                </Link>
                  </MenuItem>
                <MenuItem>
                <Link onClick={handleClose}to="/personalizare" className={classes.link}>
                 personalizare
                </Link>
                  </MenuItem>
              </Menu>
            </Stack>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
