import React from 'react';
import Sidenav from '../ccomponents/Sidenav';
import CNavbar from '../ccomponents/CNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../ccomponents/AccordionDash';
import BarChart from '../charts/BarChart';
import AdminNavbar from '../../components/Navbar';

export default function AdminHome() {
    return (
      <>
        
        <div className="bgcolor">
          <CNavbar />
          <Box height={70} />
          <Box sx={{ display: "flex" }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Stack spacing={2} direction="row">
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradient"
                    >
                      <CardContent>
                        <div className="iconstyle">
                          <CreditCardIcon />
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffff" }}
                        >
                          100.00 BDT
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Total Earning
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradientLight"
                    >
                      <CardContent>
                        <div className="iconstyle">
                          <ShoppingBagIcon />
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffff" }}
                        >
                          50.00 BDT
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Total Orders
                        </Typography>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack spacing={2}>
                    <Card sx={{ maxWidth: 345 }} className="gradientLight">
                      <Stack spacing={2} direction="row">
                        <div className="iconstyle">
                          <StorefrontIcon />
                        </div>
                        <div className="paddingall">
                          <span className="pricetitle">20K BDT</span>
                          <br />
                          <span className="pricesubtitle">Total Income</span>
                        </div>
                      </Stack>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className="gradientLight">
                      <Stack spacing={2} direction="row">
                        <div className="iconstyle">
                          <StorefrontIcon />
                        </div>
                        <div className="paddingall">
                          <span className="pricetitle">16K BDT</span>
                          <br />
                          <span className="pricesubtitle">Total Income</span>
                        </div>
                      </Stack>
                    </Card>
                  </Stack>
                </Grid>
              </Grid>
              <Box height={20} />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <div className="paddingall">
                        <span className="pricetitle2">Popular Courses</span>
                      </div>
                      <AccordionDash />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </>
    );
}