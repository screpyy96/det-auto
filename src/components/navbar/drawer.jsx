import React, { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemText,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuList,
  MenuItem
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { AccordionStyle, LinkStyle, ListItemStyle } from './navbar.style';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontSize: '20px'
  },
  icon: {
    color: 'black'
  },
  accordion: {
    margin: '0',
    padding: '0',
    marginLeft: '13px'
  }
}));

function DrawerComponent() {
  const [open] = useState(false);
  const anchorRef = useRef(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open, anchorRef]);
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemStyle style={{ textAlign: 'center' }} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/" className={classes.link}>
                Acasa
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>
          <Divider />
          <ListItemStyle onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/despre" className={classes.link}>
                Despre
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>
          <Accordion
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <AccordionSummary
              className={classes.accordion}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <AccordionStyle>Servicii</AccordionStyle>
            </AccordionSummary>
            <AccordionDetails>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button">
                <Divider />
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/valorificare">Valorificare</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/protejare">Protejare</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/mentinere">Mentinere</LinkStyle>
                </MenuItem>
                <MenuItem onClick={() => setOpenDrawer(false)}>
                  <LinkStyle to="/personalizare">Personalizare</LinkStyle>
                </MenuItem>
              </MenuList>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <ListItemStyle onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/about" className={classes.link}>
                Galerie
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>
          <Divider />
          <ListItemStyle onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <LinkStyle to="/contact" className={classes.link}>
                Contact
              </LinkStyle>
            </ListItemText>
          </ListItemStyle>

          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
