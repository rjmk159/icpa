import {combineReducers} from 'redux';
import dataLogin from './slices/Login';
import dataDashboard from './slices/Dashboard';
import dataLetters from './slices/Letters';
import dataCirculars from './slices/LatestCirculars';
import dataFlightSafety from './slices/FlightSafety';
import dataGrevience from './slices/GrevienceSection';
import dataRequest from './slices/RequestSection';
import dataNews from './slices/NewsSlice';
import dataMembersList from './slices/Members';
import dataNotification from './slices/Notification';
import dataSchemes from './slices/Schemes';

const rootReducer = combineReducers({
  dataDashboard,
  dataLogin,
  dataLetters,
  dataCirculars,
  dataFlightSafety,
  dataGrevience,
  dataRequest,
  dataNews,
  dataMembersList,
  dataNotification,
  dataSchemes,
});

export default rootReducer;
