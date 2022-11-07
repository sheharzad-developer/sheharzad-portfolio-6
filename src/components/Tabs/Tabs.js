/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@material-ui/core/styles';
import './Tabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingLeft: '0' }}>
          <Tab label="Skills" {...a11yProps(0)} style={{ fontFamily: 'Touche', color: 'white', paddingLeft: '0', fontSize: '18px', marginRight: '30px' }} />
          <Tab label="Education" {...a11yProps(1)} style={{ fontFamily: 'Touche', color: 'white', paddingLeft: '0', fontSize: '18px', marginRight: '30px' }} />
          <Tab label="Experience" {...a11yProps(2)} style={{ fontFamily: 'Touche', color: 'white', paddingLeft: '0', fontSize: '18px', marginRight: '30px' }} />
          <Tab label="Certifications" {...a11yProps(3)} style={{ fontFamily: 'Touche', color: 'white', paddingLeft: '0', fontSize: '18px', marginRight: '30px' }} />
          <Tab label="Learning" {...a11yProps(4)} style={{ fontFamily: 'Touche', color: 'white', paddingLeft: '0', fontSize: '18px', marginRight: '30px' }} />
        </Tabs>
      </Box>

      {/* Skills */}
      <TabPanel value={value} index={0}>
        <ul style={{ display: 'inline', fontSize: '12px' }}>
          <li style={{ fontSize: '18px', paddingTop: 0 }}>HTML</li>
          <li style={{ fontSize: '18px' }}>CSS</li>
          <li style={{ fontSize: '18px' }}>Javascript</li>
          <li style={{ fontSize: '18px' }}>Bootstrap</li>
          <li style={{ fontSize: '18px' }}>ReactJS</li>
        </ul>
      </TabPanel>

      {/* Education */}
      <TabPanel value={value} index={1}>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '22px', fontWeight: 'bold', color: 'white', paddingRight: '18px', paddingBottom: '10px' }}>Virtual University of Pakistan</Typography>

          <Typography style={{ fontFamily: 'Arial', fontSize: '22px', fontWeight: 'bold', color: 'white', paddingRight: '18px' }}>2021- Present</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Bachelor Degree of Computer Science</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '16px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>The Department of Computer Science offers a regular 2-year degree
            program which has been designed to equip the students with requisite
            knowledge & provide Computer Science skills that will enable them to
            capitalize on increasing career opportunities in the computer science
            sector & to expand the limits of their knowledge by pursuing further
            studies.
          </Typography>

        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '16px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}><a href="https://vu.edu.pk/pages/B.Sc_CS.aspx" target="_blank" style={{ color: 'red', textDecoration: 'none' }}>https://vu.edu.pk/pages/B.Sc_CS.aspx</a></Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '22px', fontWeight: 'bold', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Virtual University of Pakistan</Typography>
          <Typography style={{ fontFamily: 'Arial', fontSize: '22px', fontWeight: 'bold', color: 'white', paddingRight: '20px' }}>2018 - 2021</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '20px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Associate Degree in Web Design & Development</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '16px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Learning Java, cross-platform development, latest tools to deal with
            web-based applications for smart devices. Learning to design, develop
            and maintain their integrity in the market.
            The Department of Computer Science offers a 2-Year Associate Degree
            Program in Web Design & Development and is equivalent to a 14-Year
            Bachelor Degree.
          </Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '16px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}><a href="https://vu.edu.pk/pages/AssociateDegree_WDD.aspx" target="_blank" style={{ color: 'red', textDecoration: 'none' }}>https://vu.edu.pk/pages/AssociateDegree_WDD.aspx</a></Typography>
        </div>
      </TabPanel>

      {/* Experience */}
      <TabPanel value={value} index={2}>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Senior Front End Developer - Netsol Technologies, Pakistan</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '14px', paddingBottom: '10px' }}>2019 - Present</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Front End Developer - Netsol Technologies, Pakistan</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '14px', paddingBottom: '10px' }}>2016 - 2018</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Graphic Designer - Netsol Technologies, Pakistan</Typography>
        </div>
        <div class="EducationText">
          <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>2015 - 2016</Typography>
        </div>
      </TabPanel>

      {/* Certifications */}
      <TabPanel value={value} index={3}>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}><b style={{ fontSize: '20px' }}>October 2021:</b> <a href="https://www.coursera.org/account/accomplishments/certificate/KD539HCFEYW7" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>Front-End Web Development with React.</a></Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}><b style={{ fontSize: '20px' }}>September 2021:</b> <a href="https://www.coursera.org/account/accomplishments/certificate/G6S5BEMQDEHM" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>Introduction to Front-End Development with ReactJS.</a></Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}><b style={{ fontSize: '20px' }}>September 2021:</b> <a href="https://www.coursera.org/account/accomplishments/certificate/RH5LV6MLCXS5" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>Front-End Web UI Frameworks & Tools: Bootstrap 4</a></Typography>
      </TabPanel>

      {/* Learning */}
      <TabPanel value={value} index={4}>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Learning cross-platform development.</Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Learning ReactJS & React Native</Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Learning WordPress & eCommerce.</Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Learning concepts like framework.</Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: '18px', color: 'white', paddingRight: '20px', paddingBottom: '10px' }}>Training in C++, Data Structure & OOP (Object Oriented Programming)</Typography>
      </TabPanel>
    </Box>
  );
}


