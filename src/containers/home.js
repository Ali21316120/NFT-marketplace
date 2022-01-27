import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch, connect} from 'react-redux';
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import Nav from './layout/nav'
import Footer from './layout/footer'
import Article from '../components/article'
import Bid from '../components/bid'
import Collection from '../components/collection'
import Seller from '../components/seller'
import './style/home.css';
import Axios from 'axios';

var rootStyle = {
  width: "100%",
  backgroundImage: `url(${backgroundImg})`,
  height: "100%",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const useStyles = makeStyles((theme) => ({
  moreButton: {
    outline: 'none !important',
    color: '#06edfe'
  },
}))
const sellers = [
  'Sellers',
  "Buyers"
];

const oneday = [
  '1 day',
  "7 days",
  "30 days"
];
const ITEM_HEIGHT = 48;
function Home() {
  const [flag, setFlag] = useState(false);
  const [person, setPerson] = React.useState(null);
  const [term, setTerm] = React.useState(null);
  const [collectibles, setCollectibles] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  const handlePerson = (event) => {
    setPerson(event.currentTarget);
  };
  const handleTerm = (event) => {
    setTerm(event.currentTarget);
  };
  const handleClose = () => {
    setPerson(null);
    setTerm(null);
  };
  const handleUser = () =>{
    console.log("ddddd")
    history.push('/user');
  }
  if(!flag)(
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/collectible/get-all-collectibles"
    }).then(res=>{
      console.log(res.data);
      setCollectibles(res.data);
      setFlag(true)
    })
  )

  return (
    <div style={rootStyle}>
      <div className='content'>
        <Grid container style={{padding: '50px 0'}}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-1.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-2.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-3.png' />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Article title='Tips of Emerging' name='NET Artist' description='buy Lux' image='/images/article-4.png' />
          </Grid>
        </Grid>
        <div>
          <span style={{color: 'white', fontSize: 30, padding: 5}}>Top</span>
          <span style={{color: '#02f0fe', fontSize: 30, padding: 5}}>sellers</span>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handlePerson}
            className={classes.moreButton}
          >
            <ExpandMore />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={person}
            keepMounted
            open={person}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                backgroundColor: "#02f0fe"
              },
            }}
          >
            {sellers.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <span style={{color: 'white', fontSize: 30, padding: 5}}>in</span>
          <span style={{color: '#02f0fe', fontSize: 30, padding: 5}}>1 day</span>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleTerm}
            className={classes.moreButton}
          >
            <ExpandMore />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={term}
            keepMounted
            open={term}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                backgroundColor: "#02f0fe"
              },
            }}
          >
            {oneday.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png'/>
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-2.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Seller  value='12.66 ETH' name='Trym_Ruud' image='/images/seller-1.png' />
          </Grid>
        </Grid>
        <div>
          <span style={{color: 'white', fontSize: 30, paddingRight: 10}}>Hot</span>
          <span style={{color: '#02f0fe', fontSize: 30}}>bids</span>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
        </Grid>
        <div style={{paddingTop: 30}}>
          <span style={{color: 'white', fontSize: 30, paddingRight: 10}}>Hot</span>
          <span style={{color: '#02f0fe', fontSize: 30}}>Collection</span>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid item lg={6} md={12} style = {{paddingRight: "10px", paddingLeft: "10px"}}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12} style = {{paddingRight: "10px", paddingLeft: "10px"}}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12} style = {{paddingRight: "10px", paddingLeft: "10px"}}>
            <Collection image='/images/collection-1.png' />
          </Grid>
          <Grid item lg={6} md={12} style = {{paddingRight: "10px", paddingLeft: "10px"}}>
            <Collection image='/images/collection-1.png' />
          </Grid>
        </Grid>
        <div style={{color: 'white', textAlign: 'center', fontSize: 40, marginBottom: "30px"}}>
          EXPOLRE
        </div>
        <div className = {window.innerWidth>560?"x-home-filter": ""}>
          <button className = "x-home-filter-button">Onsale</button>
          <button className = "x-home-filter-button">Collectibles</button>
          <button className = "x-home-filter-button">Created</button>
          <button className = "x-home-filter-button">Liked</button>
          <button className = "x-home-filter-button">Activity</button>
          <button className = "x-home-filter-button">Following</button>
          <button className = "x-home-filter-button">Followers</button>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          {collectibles.map((collectible)=>{
            return(
              <Grid lg={3} md={4} sm={6} xs={12}>
                <Bid name={collectible.name} image={`http://localhost:5000/uploads/${collectible.file_path}`} />
              </Grid>
            )
          })
          }
        </Grid>
      </div>
    </div>
  )
}
export default Home
