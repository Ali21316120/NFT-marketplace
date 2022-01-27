import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import {useSelector, useDispatch, connect} from 'react-redux';
import Nav from './containers/layout/nav';
import Footer from './containers/layout/footer';
import Home from './containers/home';
import ConnectWallet from './containers/connect_wallet';
import Create from './containers/create';
import Single from './containers/single';
import Multiple from './containers/multiple';
import UserCollectible from './containers/user_collectible';
import UserActivity from './containers/user_activity';
import Product from './containers/product';
import Collection from './containers/collection';
import Following from './containers/following_page';
import Activity from './containers/activity_page';
import Faq from './containers/faq';
import DiscussionCategories from './containers/community_discussion_categories';
import DiscussionLatest from './containers/community_discussion_latest';
import EditProfile from './containers/edit_profile';

function Routes() {
    const metaMask_state = useSelector(state => state.metamask);
    return (
        <HashRouter>
          <Nav metamaskState = {metaMask_state.metamaskState} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/connect-wallet" component={ConnectWallet} />
            <Route exact path="/create" component={Create} />
            <Route path="/create/single" component={Single} />
            <Route path="/create/multiple" component={Multiple} />
            <Route exact path="/user/collectible" component={UserCollectible} />
            <Route exact path="/user/activity" component={UserActivity} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/following" component={Following} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/discussion/categories" component={DiscussionCategories} />
            <Route exact path="/discussion/latest" component={DiscussionLatest} />
            <Route exact path="/edit-profile" component={EditProfile} />
          </Switch>
          <Footer />
        </HashRouter>
    );
}

const mapStateToProps = state => ({
  metamask: state.metamask,
});

export default connect(
  mapStateToProps,
  {  }
)(Routes);
