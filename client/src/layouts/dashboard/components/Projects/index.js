/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";
import React from 'react';
import CalanderPick from "./calander";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "variables/charts";
import { Grid } from "carbon-components-react";
function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  const [result,setresult] = useState(null)
  const handlesubmit = () =>{
    console.log(selectedDate)
    axios.post(`${BASE_URL}/api/model`,{'dates':selectedDate.toISOString().split('T')[0]}).then((resp)=>{
      setresult(resp.data.result)
    }).catch((e)=>{
      alert(e)
    })
  }
  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card
      
      sx={{
        height: '380px',
      }}
    >
      <h2 style={{ color: 'white' }}>Select a Date</h2>
      <div className="calendar-picker">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
          />
      </div>
        <Button onClick={handlesubmit} variant="contained" color="primary" sx = {{marginTop:"20px", width : "50px"}}>
          Predict
        </Button>
        <Grid>
        {result ? (<VuiTypography color="text" sx = {{marginTop:"20px", width : "100%"}}>
          Result : {result}
        </VuiTypography>):<div></div>}
        </Grid>
    </Card>
  );
}

export default Projects;
