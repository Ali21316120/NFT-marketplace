import React, {useState} from 'react';
import {Grid, Avatar, makeStyles, TextField, InputAdornment} from '@material-ui/core';
import profileImg from '../assets/img/profileAvatar.png';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: "18vw",
      height: "18vw",
      display: "-webkit-inline-box!important"
    },
    normal: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px"
    },
    label : {
        marginBottom: '21px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: "rgb(53, 33, 157)",
        width: '165px',
        height: '45px',
        borderRadius: '50px',
        fontSize: '17px',
        color: "rgb(67, 190, 253)",
        lineHeight: 1.2,
    },
    inputField: {
        "& .MuiFormLabel-root": {
            color: "white"
          }
    },
    underline: {
        color: 'white' ,
        '&::after': {
          border: '0.5px solid white'
        }
      }
  }));

function Profile(){
    const classes = useStyles();
    const [previewImage, setPreviewImage] = useState(null);

    const handleUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
          setPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
      }
    return(
        <div className = "diceGrid">
            <div className = "x-font-big-blue">
                Edit Profile
            </div>
            <div className = "x-font-normal-white mb-5">
                You can set preferred display name, create your branded profile URL and manage other personal settings
            </div>
            
            <Grid container spacing = {3}>
                <Grid item md = {4} sm = {12} xs = {12} className = "text-center">
                        <Avatar alt="avatar" src={previewImage==null? profileImg:previewImage} className={classes.large} />
                        <div className={classes.normal}>
                            <label htmlFor="file" className = {classes.label}>Choose file</label>
                            <input type="file" id="file" className = "d-none" onChange={handleUpload} />
                        </div>
                </Grid>
                <Grid item md = {8} sm = {12} xs = {12}>
                    <div className = "mb-5 mt-5">
                        <div className = "x-font-normal-yellow1">
                            Display name
                        </div>
                        <div className = "x-font-normal-white">
                            <TextField
                                className = {classes.inputField}
                                fullWidth 
                                variant = "standard" 
                                label="Enter your display name" 
                                InputProps={{ classes: {underline: classes.underline} }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className = "x-font-normal-yellow1">
                            Bio
                        </div>
                        <div className = "x-font-normal-white">
                            <TextField
                                className = {classes.inputField}
                                fullWidth 
                                variant = "standard" 
                                label="Tell about yourself in a few words" 
                                InputProps={{ classes: {underline: classes.underline} }}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1 mb-3">
                    Custom URL
                </div>
                <div>
                    <TextField
                        fullWidth
                        label="Enter your custom URL"
                        variant = "standard"
                        className={classes.inputField}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">https://eastside.com/</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1">
                    Twitter Username
                </div>
                <div className = "x-font-small-grey mb-3">
                    Link your Twitter account to gain more trust on the marketplace
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                            endAdornment: <InputAdornment position="end">Link</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1 mb-3">
                    Personal site or portfolio
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1">
                    Email
                </div>
                <div className = "x-font-small-grey mb-3">
                    Your email for marketplace notifications
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Link</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
                <div className = "x-font-small-grey mt-2">
                    You must sign message to view or manage your email. <span className = "x-font-normal-blue">Sign message</span>
                </div>
            </div>
            <div className = "x-font-normal-yellow1 mt-5">
                Verification
            </div>
            <Grid container spacing = {3}>
                <Grid item md = {8} sm = {8} xs = {8} className = "x-font-small-grey">
                    Proceed with verification process to get more visibility and gain trust on Rarible Marketplace. Please allow up to several weeks for the process.
                </Grid>
                <Grid item md = {4} sm = {4} xs = {4}>
                    <button  className = "x-get-verified-button">Get Verified</button>
                </Grid>
            </Grid>
            <div className = "mt-5">
                <button className = "x-product-place-bid-button x-font-normal-white1">Update Profile</button>
            </div>
        </div>
    )
}

export default Profile;