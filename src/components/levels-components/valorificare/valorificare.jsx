import React, { useEffect, useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { BoxStyled, TabListStyle, TabStyle } from './valorificare.styled';

import { valorificare } from '../../../data/db';
import { ValorificaComponent } from './valorifica-component';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    top: '100px',
    right: '30px',
    '&MuiPaper-root': {
      top: '100px',
      right: '30px',
      marginLeft: theme.spacing(1)
    }
  }
}));

const Valorificare = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BoxStyled sx={{ typography: 'body1' }}>
        <TabContext value={value} f>
          <BoxStyled sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {isMobile ? (
              <TabListStyle
                className={classes.root}
                orientation="vertical"
                centered
                variant="fullWidth"
                onChange={handleChange}
                aria-label="full width tabs example">
                <TabStyle label="Level 1" value="1" />
                <TabStyle label="Level 2" value="2" />
                <TabStyle label="Level 3" value="3" />
                <TabStyle label="Level 4" value="4" />
                <TabStyle label="Level 5" value="5" />
                <TabStyle label="Level 6" value="6" />
              </TabListStyle>
            ) : (
              <TabListStyle
                className={classes.root}
                orientation="horizontal"
                centered
                variant="fullWidth"
                onChange={handleChange}
                aria-label="full width tabs example">
                <TabStyle label="Level 1" value="1" />
                <TabStyle label="Level 2" value="2" />
                <TabStyle label="Level 3" value="3" />
                <TabStyle label="Level 4" value="4" />
                <TabStyle label="Level 5" value="5" />
                <TabStyle label="Level 6" value="6" />
              </TabListStyle>
            )}
          </BoxStyled>
          {valorificare.map((i, id) => {
            return (
              <TabPanel value={`${i.id}`} key={id}>
                <ValorificaComponent data={i} />
              </TabPanel>
            );
          })}
        </TabContext>
      </BoxStyled>
    </div>
  );
};

export default Valorificare;
