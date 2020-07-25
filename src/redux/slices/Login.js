import {createSlice} from '@reduxjs/toolkit';
import {
  login,
  register,
  reset,
  updateProfile,
  getMyProfile,
} from '../../_utils/api';

const {actions, reducer} = createSlice({
  name: 'dataLogin',
  initialState: {
    token: '',
    isLoading: false,
    details: {},
    profile: {},
  },
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload.token;
    },
    setDetails: (state, {payload}) => {
      state.details = payload.details;
    },
    setProfile: (state, {payload}) => {
      state.profile = payload.profile;
    },
    setLoader: (state, {payload}) => {
      state.isLoading = payload.status;
    },
  },
});
export default reducer;
export const {setToken, setLoader, setDetails, setProfile} = actions;

export const checkLogin = (email, password, callback) => (dispatch) => {
  try {
    login(email, password)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setToken({token: res.data.result}));
          dispatch(setDetails({details: res.data.result.userData}));
          callback(false, res.data.result);
        }
      })
      .catch((_error) => {
        callback(
          true,
          _error.response && _error.response.data
            ? _error.response.data.message
            : '',
        );
      });
  } catch (_error) {}
};

export const registerUser = (obj, callback) => (dispatch) => {
  try {
    register(obj)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setLoader(false));
          callback(false);
        }
      })
      .catch((_error) => {
        callback(
          true,
          _error.response && _error.response.data
            ? _error.response.data.message
            : '',
        );
      });
  } catch (_error) {}
};

export const logout = () => (dispatch) => {
  dispatch(setToken({token: null}));
};
export const resetPassword = (obj, callback) => (dispatch) => {
  try {
    reset(obj)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setLoader(false));
          callback(false, res.data.result);
        }
      })
      .catch((_error) => {
        callback(
          true,
          _error.response && _error.response.data
            ? _error.response.data.message
            : '',
        );
      });
  } catch (_error) {}
};

export const updateUser = (obj, token, callback) => (dispatch) => {
  try {
    updateProfile(obj, token)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setLoader(false));
          callback(false);
        }
      })
      .catch((_error) => {
        callback(
          true,
          _error.response && _error.response.data
            ? _error.response.data.message
            : '',
        );
      });
  } catch (_error) {}
};
export const getProfile = (authToken, callback = () => {}) => (dispatch) => {
  try {
    getMyProfile(authToken)
      .then((res) => {
        if (res.data.ok) {
          dispatch(setProfile({profile: res.data.result}));
        }
      })
      .catch((_error) => {
        callback(true);
      });
  } catch (_error) {}
};
