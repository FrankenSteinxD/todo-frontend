import React, { useState, useCallback } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  arrayOf,
  shape,
  string,
  element,
  node,
  number,
  oneOfType,
} from 'prop-types';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const TabList = ({ tabs, ...others }) => {
  const [index, setIndex] = useState(0);
  const handleChange = useCallback((_, i) => setIndex(i), []);
  return (
    <>
      <Paper>
        <Tabs
          value={index}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          {...others}
        >
          {tabs.map((tab, i) => (
            <Tab key={i} label={tab.label} icon={tab.icon} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Paper>
      {tabs.map((tab, i) => (
        <TabPanel key={i} value={index} index={i}>
          {tab.component}
        </TabPanel>
      ))}
    </>
  );
};

TabList.defaultProps = {
  tabs: [],
};

TabList.propTypes = {
  tabs: arrayOf(
    shape({
      label: string,
      icon: element,
      component: element,
    }),
  ),
};

const TabPanel = ({ value, index, children, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

TabPanel.defaultProps = {
  children: [],
};

TabPanel.propTypes = {
  value: number.isRequired,
  index: number.isRequired,
  children: oneOfType([node, arrayOf(node)]),
};

export default TabList;
