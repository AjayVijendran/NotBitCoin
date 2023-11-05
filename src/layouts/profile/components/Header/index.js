import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import VuiAvatar from 'components/VuiAvatar';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import burceMars from 'assets/images/avatar-simmmple.png';

function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);

  const fileInputRef = useRef();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Implement logic to save the edited avatar image
    setIsEditing(false);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file));
    }
  };

  return (
    <VuiBox position="relative">
      <DashboardNavbar light />
      <Card sx={{ px: 0, mt: 2, ml:'0px'}}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={2} display="flex" sx={{ justifyContent: 'center' }}>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            <VuiAvatar
              src={isEditing ? URL.createObjectURL(avatarImage) : burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
              onClick={() => fileInputRef.current.click()}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <VuiBox
              height="100%"
              mt={0.5}
              lineHeight={1}
              display="flex"
              flexDirection="column"
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Mark Johnson
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                mark@simmmple.com
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
        <AppBar position="static">
          <Tabs
            value={0}
            sx={{ background: 'transparent', display: 'flex', justifyContent: 'flex-end', }}
          >
          
          </Tabs>
        </AppBar>
      </Card>
    </VuiBox>
  );
}
export default Header;
