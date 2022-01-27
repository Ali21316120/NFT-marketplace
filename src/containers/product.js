import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Footer from './layout/footer';
import {Grid} from '@material-ui/core';
import productImg from '../assets/img/12.png';
import gameController1 from '../assets/img/game_controller1.png';
import gameController from '../assets/img/game_controller.png';
import paintImg from '../assets/img/paint.png';
import personImg from '../assets/img/avatar.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function Product(){
    const history = useHistory();
    const [option, setOption] = useState('info');
    const optionContent = (
        option === "info" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            </div>
            ):option === "owners" ?(
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            ):option === "history" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            </div>
            ):option === "details" ?(
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            ):option === "bids" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            </div>
            ):null
    )
    return(
        <div>
            <Grid container spacing = {3} className = "diceGrid">
                <Grid item md = {7} sm = {12} xs = {12}>
                    <img src = {productImg} alt = "product" className = "x-product-img" />
                    <div className = "text-right mt-4 mb-5">
                        <button className = "x-heart-round-transparent-button ml-3"><FavoriteIcon /></button>
                        <button className = "x-zoom-round-transparent-button ml-3"><ZoomOutMapIcon /></button>
                    </div>
                    <div className = "x-font-normal-white">
                        we use
                        <img src = {gameController1} alt = "game-controller" className = "ml-1 mr-2"/>
                        .
                        <span className = "x-font-small-grey">Learn more x</span>
                    </div>
                </Grid>
                <Grid item md = {5} sm = {12} xs = {12} className = "pl-5">
                    <div className = "x-font-big-blue d-inline mr-2">
                        Pickin's up the Tinseltown Dips
                    </div>
                    <div className = "d-inline">
                        <button className = "x-more-round-transparent-button mr-1"><MoreHorizIcon /></button>
                        <button className = "x-upload-round-transparent-button"><CloudUploadIcon /></button>
                    </div>
                    <div className = "x-font-normal-yellow mb-2">
                        Not for sale <span className = "x-font-small-grey">1 of 1</span>
                    </div>
                    <div>
                        <button className = "x-radius-transparent-button mr-3"><img src = {paintImg} alt = "paint-img" /> Art </button>
                        <button className = "x-radius-transparent-button"><img src = {gameController1} alt = "game-controller" /> Games </button>
                    </div>
                    <div className = "x-font-normal-white mb-4">
                        A tech-surreal survey regarding current Hollywood cultural relevancy flops in trying to keep a connection with the mass populace during the Coronavirus epidemic. so much so that it makes me wonder if it gets worse that probably the...
                        <span className = "x-font-small-grey"> Read more</span>
                    </div>
                    <div className = "x-home-filter">
                        <button className = "x-home-filter-button" onClick = {()=>setOption("info")}>Info</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("owners")}>Owners</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("history")}>History</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("details")}>Details</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("bids")}>Bids</button>
                    </div>
                    <hr/>
                    {optionContent}
                    <div className = "x-product-bid-container">
                        <div>
                            <Avatar src = {personImg} alt="Remy Sharp" className = "d-inline-block" />
                            <div className = "d-inline-block">
                                <div className = "x-font-normal-white">
                                    Highest bid by <span className = "x-font-normal-yellow">DonDoom</span>
                                </div>
                                <div className = "x-font-normal-blue1">
                                    0.04 WETH <span className = "x-font-normal-grey">$62.96</span>
                                </div>
                            </div>
                        </div>
                        <div className = "mt-2">
                            <button className = "x-product-place-bid-button x-font-normal-white">Place bid</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Product;