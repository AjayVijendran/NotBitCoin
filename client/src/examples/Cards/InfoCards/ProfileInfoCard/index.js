import React, { useEffect, useState } from "react";
import Select from "react-select";
import Card from '@mui/material/Card';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { BASE_URL } from "variables/charts";

function EditableCard({ info, description, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(info);
  const [editedDescription, setEditedDescription] = useState(description);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    axios.post(`${BASE_URL}/api/account`,editedInfo,{withCredentials:true}).then((resp)=>{
      alert("Saved Successfully")
    }).catch((error)=>{
      alert("Token expired Login again")
      location.href = 'authentication/sign-in'
    })
  };

 

  return (
    <Card sx={{ height: '100%', padding: '16px', borderRadius: '16px', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',overflowY: 'auto'  }}>
      <VuiBox display ="flex" flexDirection= "row" justifyContent="flex-end" >
      {isEditing ? (
          <>
            <Button variant="contained" onClick={handleSave} sx = {{marginRight:"20px"}}>Save</Button>

          </>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
        )}
      </VuiBox>
      <VuiBox display="flex" justifyContent="flex-start" alignItems="center">
      {isEditing ? (
        <VuiBox display="flex" flexDirection="column">
          <VuiTypography variant="subtitle1" color="text" fontWeight="regular">
            Full Name
          </VuiTypography>
          <TextField
            variant="outlined"
            value={editedInfo.name}
            onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })}
            // Extend the width to 100%
            multiline // Allow multiple lines
            rows={2} // Adjust the number of rows as needed
          />
        </VuiBox>
      ) : (
        <VuiTypography variant="lg" fontWeight="bold" color="text" textTransform="capitalize">
          {editedInfo.name}
        </VuiTypography>
      )}
    </VuiBox>      
      <VuiBox opacity={0.3}>
        <Divider />
      </VuiBox>
      <VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        </VuiTypography>
        <VuiBox>
          {isEditing ? (
            <>
            <VuiTypography variant="subtitle1" color="text" fontWeight="regular" >
           Mobile
          </VuiTypography>
            <TextField
              variant="outlined"
              fullWidth
              value={editedInfo.phone_no}
              onChange={(e) => setEditedInfo({ ...editedInfo, phone_no: e.target.value })}
              rows={5} // Adjust the number of rows as needed
              style={{ marginBottom: 1, width: '100%'}}
            />
            </>
          ) : (
            <VuiTypography variant="body1" color="text" fontWeight="regular">
              Mobile: {editedInfo.phone_no}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox>
          {isEditing ? (
            <>
            <VuiTypography variant="subtitle1" color="text" fontWeight="regular" >
           Email
          </VuiTypography>
            <TextField
              variant="outlined"
              fullWidth
              value={editedInfo.email}
              onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })}
              rows={2} // Adjust the number of rows as needed
            />
            </>
          ) : (
            <VuiTypography variant="body1" color="text" fontWeight="regular">
              Email: {editedInfo.email}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox>
          {isEditing ? (
            <>
            <VuiTypography variant="subtitle1" color="text" fontWeight="regular" >
           Age
          </VuiTypography>
            <TextField
              variant="outlined"
              fullWidth
              value={editedInfo.age}
              onChange={(e) => setEditedInfo({ ...editedInfo, age: e.target.value })}
              rows={1} // Adjust the number of rows as needed
            />
            </>
          ) : (
            <VuiTypography variant="body1" color="text" fontWeight="regular">
              Age: {editedInfo.age}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox>
          
          {isEditing ? (
            <>
            <VuiTypography variant="subtitle1" color="text" fontWeight="regular" >
           Country
          </VuiTypography>
            
            <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => {setSelectedCountry(selectedOption);console.log(selectedOption);setEditedInfo({ ...editedInfo, address:selectedOption.label})}}
    />
                </>
          ) : (
            <VuiTypography variant="body1" color="text" fontWeight="regular">
              Location: {editedInfo.address}
            </VuiTypography>
          )}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default EditableCard;
