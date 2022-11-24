import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { TabListStyle, TabStyle } from './valorificare.styled';

import { valorificare } from '../../../data/db';
import { ValorificaComponent } from './valorifica-component';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    display: 'block'
  },
  tabs: {
    color: 'black',
    display: 'block',
    '& .MuiTabs-flexContainer': {
      display: 'block'
    }
  }
}));

const Valorificare = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }} className={classes.tabs}>
        <TabContext value={value} className={classes.tabs}>
          <Box className={classes.tabs} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabListStyle
              className={classes.tabs}
              variant="fullWidth"
              onChange={handleChange}
              aria-label="full width tabs example">
              <TabStyle className={classes.tabs} label="Level 1" value="1" />
              <TabStyle label="Level 2" value="2" />
              <TabStyle label="Level 3" value="3" />
              <TabStyle label="Level 4" value="4" />
              <TabStyle label="Level 5" value="5" />
              <TabStyle label="Level 6" value="6" />
            </TabListStyle>
          </Box>
          {valorificare.map((i, id) => {
            return (
              <TabPanel value={`${i.id}`} key={id}>
                <ValorificaComponent data={i} />
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </div>
  );
};

export default Valorificare;
