import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import {Favorite, MoreVert} from '@material-ui/icons'
import {IconButton, Menu, MenuItem} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bidRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0'
  },
  bid: {
    height: 300,
    width: 250,
  },
  text: {
    zIndex: 3,
    padding: '10px 20px',
    backgroundColor: '#27167e',
    borderRadius: '0 0 10px 10px',
    position: 'relative'
  },
  iconHeart: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    color: '#4b33c5'
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins'
  },
  hoverZoom: {
    overflow: 'hidden',
    position: 'relative',
    height: 200,
    width: 250,
    cursor: 'pointer',
    borderRadius: '10px 10px 0 0',
  },
  iconMore: {
    zIndex: 3,
    position: 'absolute',
    right: 0,
    top: 10,
    color: 'white',
    outline: 'none !important'
  },
  image: {
    transition: 'transform 0.4s ease',
    height: 200,
    width: 250,
    "&:hover": {
      transform: 'scale(1.1)'
    },
  },
  seller1: {
    zIndex: 2,
    position: 'absolute',
    top: 10,
    left: 10,
    width: 25,
    height: 25,
    borderRadius: 2
  },
  seller2: {
    zIndex: 3,
    position: 'absolute',
    top: 10,
    left: 20,
    width: 25,
    height: 25,
    borderRadius: 2
  },
  check: {
    zIndex: 4,
    position: 'absolute',
    top: 10,
    left: 40,
    width: 12,
    height: 12
  },
  fire: {
    zIndex: 4,
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 15,
    height: 20
  }
}))
const options = [
  'Place a bid',
  'View on OpenSea',
  'Report',
];
const ITEM_HEIGHT = 48;

export default function Bid(props) {
  const classes = useStyles();
  const {name, image} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.bidRoot}>
      <div className={classes.bid}>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image}></img>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.iconMore}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                backgroundColor: "#02f0fe"
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <img className={classes.seller1} src='/images/seller-1.png'></img>
          <img className={classes.seller2} src='/images/seller-2.png'></img>
          <img className={classes.check} src='/images/check.png'></img>
          <img className={classes.fire} src='/images/fire.png'></img>
        </div>
        <div className={classes.text}>
          <div className={classes.name}>{name}</div>
          <div style={{fontSize: 13}}>
            <span style={{color: '#f3e558', paddingRight: 20}}>1.1ETH</span>
            <span style={{color: 'gray'}}>1 of 1</span>
          </div>
          <div style={{fontSize: 13}}>
            <span style={{color: 'white'}}>Highest Bid</span>
            <span style={{color: '#1199cb'}}>1.4 WETH</span>
          </div>
          <Favorite className={classes.iconHeart} />
        </div>
      </div>
    </div>
  );
}