
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";
import React, { useEffect, useState } from 'react';

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";


// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import axios from 'axios';

const iframeSrc = 'https://www.fxempire.com/crypto/bitcoin/advanced-chart?back=/bitcoin/chart'
function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [btcPrice, setBtcPrice] = useState(null);

  const fetchBtcPrice = () => {
    // Fetch the BTC price data from CryptoCompare's API
    axios
      .get('https://min-api.cryptocompare.com/data/pricemulti', {
        params: {
          fsyms: 'BTC',
          tsyms: 'USD',
        },
      })
      .then((response) => {
        // Extract the BTC price from the CryptoCompare API response
        const price = response.data.BTC.USD;
        setBtcPrice(price);
      })
      .catch((error) => {
        console.error('Error fetching BTC price:', error);
      });
  };
  useEffect(() => {
    // Fetch BTC price when the component mounts
    fetchBtcPrice();

    // Set up an interval to fetch the BTC price every 5 minutes (or your preferred interval)
    const intervalId = setInterval(fetchBtcPrice, 60000); // 300000 milliseconds (5 minutes)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "current price", fontWeight: "regular" }}
                count=<p>{btcPrice !== null ? (
                  <p>${btcPrice}</p>
                ) : (
                  <p>Loading BTC price...</p>
                )}</p>
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12} xl={15}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="50px">
                    Live Price
                  </VuiTypography>
                  <VuiBox sx={{ height: "600px" }}>
                  <LineChart
        iframeSrc={iframeSrc}
      />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} display = "flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Grid item  xl = {9} xs={10} md={6} lg={10} alignItems="center">
            <Projects />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
