
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Gold from "./../../Images/goldf.jpg"
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import {useState} from "react"
import card from "./../../Images/CRDBHRHB.jpg"
import priceimg from "./../../Images/FTRTFB T.jpg"
import lastimg from "./../../Images/RGRDGBHREGVRE.jpg"
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"

import { NavDropdown, Container, Col, Row, Modal, Nav, Form, FormControl, Button, Navbar } from "react-bootstrap"
import './Linebar.css'
// import { height } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'red',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',

      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Col  > <Link to="/"><button className="pagsses" >Home</button></Link></Col>

      <Col  > <Link to="/Dashboard"><button className="pagsses" >Dashboard</button></Link></Col>

      <Col  > <Link to="/HelpCenter"><button className="pagsses" >Centre</button></Link></Col>

      <Col  > <Link to="/Contact"><button className="pagsses">Contact</button></Link></Col>


    </Menu>
  );
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [modaltype, setmodaltype] = useState("wallet")
  return (
    <Box sx={{ flexGrow: 1 }}
    // backgroundColor="#e8e6e6"
    >
      <AppBar position="fixed"
        id='Appbarmain'

      >
        <Modal
          size="sm"
          show={smShow}
          // onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"


        >

          <Modal.Header className="manButn">
            <img src={closeicon} className="cse" onClick={() => { setSmShow(false) }} />
            <div>
              <img src={Gold} id="goldenicon" />
              <button id="funfM">FUNDING MANAGEMENT</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div><button className="LognSignUp" onClick={() => setmodaltype("Withdraw")}

                style={{ backgroundColor: modaltype === "Withdraw" ? "#550d9c" : "white" }}
              >DEPOSIT</button></div>
              <div><button className="LognSignUp" style={{ backgroundColor: modaltype === "wallet" ? "#550d9c" : "white" }} onClick={() => setmodaltype("wallet")}>WITHDRAW </button>
              </div>

            </div>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#003a96", marginTop: "-10px" }} >




            {modaltype === "wallet" ? <div>

              <div id="depostm">
                <p id="amountT" >SELECT YOUR AMOUNT</p>
                <Container style={{ width: "100%", display: "flex" }}>
                  <Row>
                    <Col sm><button className="amountb">30</button></Col>
                    <Col sm><button className="amountb">50</button></Col>
                    <Col sm><button className="amountb">100</button></Col>
                    <Col sm><button className="amountb">250</button></Col>
                    <Col sm><button className="amountb">500</button></Col>
                  </Row>
                </Container>
                <div id="maincard">
                  <img src={card} className="cardimg" />

                  <img src={priceimg} className="cardimg" />
                </div>
                <div id="lastmn">
                  <button id="makeD">MAKE A DEPOSIT</button><br />
                  <p id="paypaltext">PAY USING PAYPAL</p>
                  <img src={lastimg} id="lastimg" />
                </div>
              </div>

            </div> :

              <div id="withdrawM">
                <p id="Awithdraw">ENTER YOUR AMOUNT YOU WISH TO WITHDRAW
                  <br /> <br /> <span style={{ fontWeight: "bold", marginLeft: "80px" }}> Balance</span><br />
                  &nbsp; &nbsp; &nbsp; &nbsp; <img src={Gold} /> &nbsp; &nbsp; &nbsp; <span style={{ fontSize: "20px", fontWeight: "900" }}>$ &nbsp;   450.00</span><br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Enter Withdrawn amount <br />
                  <input type="text" placeholder="Enter Amount" className="inputwithdraw" /><br /> <br />
                  <button className="lasywithdraw">WITHDRAW</button>
                  <br />
                  <br />
                </p>

              </div>
            }


          </Modal.Body>

        </Modal>
        <Toolbar>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Row id="row">
              <Col id="pagessmain">
                <Link to="/"> <Col><button className="pagss" id="homepge"><span id='hme'>Home</span></button></Col></Link>
                <div className="lin"></div>
                <Link to="/Dashboard"> <Col  ><button className="pagss" id="dashbord"> <spane id="dshbod">Dashboard</spane></button></Col></Link>
                <div className="lin"></div>
                <Link to="/HelpCenter">    <Col  ><button className="pagss" id="hcentr"><span className='help'>Help Centre</span></button></Col></Link>
                <div className="lin"></div>
                <Link to="/Contact">    <Col  ><button className="pagss" id='contactpge'>Contact</button></Col></Link>
                {/* <div className="lin"></div> */}
                <Col  ></Col>
            
              </Col>
            </Row>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>


          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
