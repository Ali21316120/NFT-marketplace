import React from 'react';
import {withRouter} from 'react-router-dom';
import "./App.css";
import Nav from './containers/layout/nav';
import Routes from './router'
import "react-notifications/lib/notifications.css"
import { NotificationContainer } from "react-notifications"
import "react-datepicker/dist/react-datepicker.css";
import store from "./store";
import {useSelector, useDispatch, connect, Provider} from 'react-redux';

function App (){
  return(
      <Provider store={store}>
        <NotificationContainer />
        <Routes /> 
        
      </Provider>
  )
};

export default App;
