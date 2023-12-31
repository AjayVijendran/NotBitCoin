
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";
import axios from "axios";
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

import CoverLayout from "layouts/authentication/components/CoverLayout";

import bgSignIn from "assets/images/signInImage.png";
import { BASE_URL } from "variables/charts";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [userinfo,setinfo] = useState({
    email : '',
    pwd :''
  })
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSubmit = () =>{
    axios.post(`${BASE_URL}/api/login`,userinfo,{withCredentials : true}).then((resp)=>{
      location.href = '/dashboard',
      alert("Logged in Successfully")
    }).catch((e)=>{
      alert(e?.error?.message||'Something Wrong')
    })
  }
  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Enter your email and password to sign in"
      image={bgSignIn}
    >
      <VuiBox component="form" role="form">
        <VuiBox mb={2}>
          <VuiBox mb={0.5} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput 
            value={userinfo.email} 
            onChange = {(e)=>{setinfo({...userinfo,email:e.target.value})}}
            type="email" placeholder="Your email..." fontWeight="500" />
          </GradientBorder>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Password
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="password"
              placeholder="Your password..."
              value = {userinfo.pwd}
              onChange = {(e)=>{setinfo({...userinfo,pwd:e.target.value})}}
              sx={({ typography: { size } }) => ({
                fontSize: size.sm,
              })}
            />
          </GradientBorder>
        </VuiBox>
        <VuiBox display="flex" alignItems="center">
          <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Remember me
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={4} mb={1}>
          <VuiButton onClick = {handleSubmit} color="info" fullWidth>
            SIGN IN
          </VuiButton>
        </VuiBox>
        <VuiBox mt={3} textAlign="center">
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <VuiTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="white"
              fontWeight="medium"
            >
              Sign up
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
