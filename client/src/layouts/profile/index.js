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

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import profile1 from "assets/images/profile-1.png";
import profile3 from "assets/images/profile-3.png";
import gopal from "assets/images/gop.png"
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import yashwanth from 'assets/images/yashwanth.png'
import fardeen from "assets/images/fardeen_khan.jpg"
import ajay from "assets/images/ajay.png"
function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3} xs={12}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={6}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "300px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={6}
            xxl={6}
            sx={{height:"300px", width:"100%"}}
          >
            <ProfileInfoCard
              title="profile information"
              // description="Hi, I'm Mark Johnson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Mark Johnson",
                age: "19",
                mobile: "(44) 123 1234 123",
                email: "mark@simmmple.com",
                location: "",
              }}
              social={[
                {
                  link: "https://www.facebook.com",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px" display="flex" flexDirection="column" height="100%" alignItems= "center" >

        <Grid item xs={12} xl={9.2}>
          <Card display="flex" flexDirection="column" height="100%" alignItems= "center">
            <VuiBox display="flex" flexDirection="column" height="100%" alignItems= "center">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  The Creators
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  Design, Develop, Deploy
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} xl={3}>
                  <DefaultProjectCard
                    image={ajay}
                    label="Musketeer #1"
                    title="Ajay Vijendran G"
                    description="Back-End Developer"
                    action={{
                      type: "",
                      route: "https://www.linkedin.com/in/ajay-vijendran-259a51247/",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8} xl={3}>
                  <DefaultProjectCard
                    image={gopal}
                    label="Musketeer #2"
                    title="Gopal Singh S"
                    description="Front-End Developer"
                    action={{
                      type: "",
                      route: "https://www.linkedin.com/in/gopal-singh-s-49b62a166/",
                      color: "white",
                      label: "VIEW",
                    }}

                  />
                </Grid>
                <Grid item xs={12} md={8} xl={3}>
                  <DefaultProjectCard
                    image={fardeen}
                    label="Musketeer #3"
                    title="Fardeen Feroz Khan"
                    description="Front-End Developer"
                    action={{
                      type: "",
                      route: "https://www.linkedin.com/in/fardeen-feroz-khan-98a866220/",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8} xl={3}>
                  <DefaultProjectCard
                    image={yashwanth}
                    label="Musketeer #4"
                    title="Putikam Yashwanth"
                    description="ML Model Developer"
                    action={{
                      type: "",
                      route: "https://www.linkedin.com/in/yashwanth-putikam-a16482232/",
                      color: "white",
                      label: "VIEW",
                    }}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
