import axios from 'axios';
import {listCount} from '../_const/const';
// export const BASE_URL = "http://142.93.220.155:5555";
// export const BASE_URL = 'http://localhost:5555/api';
export const BASE_URL = 'http://icpapilots.ml/api';

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/login`, {email, password})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const register = (obj) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/register`, {...obj})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const reset = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/resetPassword`, {email})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgot = (password, id, token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/authorize/resetd`, {...password, id, token})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const updateProfile = (obj, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${BASE_URL}/me/updateProfile`, obj, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getMyProfile = (authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/me/getMyProfile`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const upload = (data, authToken) => {
  console.log(`JUNAID ${JSON.stringify(data)}`, `${BASE_URL}/file/upload`);
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/file/upload`, data, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        console.log(`JUNAID ${response}`);
        resolve(response);
      })
      .catch((error) => {
        console.log(`JUNAID `, error);
        reject(error);
      });
  });
};
export const list = (authToken, type, pageNo = 1) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/file/list?pageSize=${listCount}&fileType=${type}&pageNum=${pageNo}`,
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getNews = (authToken) => {
  const keyword = 'air india';
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/news?search=${keyword}`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const download = (id, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/file/render?docId=${id}`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getNotification = (authToken, pageNo) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/me/getMyNotficationList?pageSize=10000&pageNum=${pageNo}`,
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const markAsRead = (id, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/me/markAsRead?docId=${id}`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getMembers = (authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/me/members`, {headers: {Authorization: authToken}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const raiseGrevience = (data, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${BASE_URL}/me/raiseGrievance`,
        {...data},
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const raiseFlightRequest = (data, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${BASE_URL}/me/createFlightRequest`,
        {...data},
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getGrevience = (authToken, pageNo) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/me/getGrievanceList?page_size=${'1000'}&page_num=${pageNo}`,
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getFlight = (authToken, pageNo) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/me/getflightRequestList?page_size=${'1000'}&page_num=${pageNo}`,
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUsers = (authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/me/getflightRequestList?page_size=250&page_num=1`, {
        headers: {
          Authorization: authToken,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setAcknowledged = (id, authToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${BASE_URL}/me/ackGrievance?gId=${id}`,
        {},
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getSchemeDetails = (type, pageNo, authToken) => {
  console.log(type, pageNo, authToken );
  const _type = {
    tmu: `${BASE_URL}/tmu/getTmu`,
    pmu: `${BASE_URL}/pmu/getPmu`,
    incident: `${BASE_URL}/admin/getIncidentReport`,
    accident: `${BASE_URL}/admin/getAccidentReport`,
    adminstrator: `${BASE_URL}/admin/getAdminReport`,
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${_type[type]}?page_size=1200&status=pending&pageNum=${pageNo}`, {
        headers: {Authorization: authToken},
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const docUpload = (data, authToken, formType) => {
  return new Promise((resolve, reject) => {
    let url = `${BASE_URL}/doc/upload`;
    if (formType) {
      if (formType !== 'pmu' && formType !== 'tmu') {
        url = `${BASE_URL}/report/upload`;
      }
    }

    axios
      .post(url, data, {headers: {Authorization: authToken}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const schemes = (data, authToken) => {
  return new Promise((resolve, reject) => {
    const _type = {
      tmu: `${BASE_URL}/tmu/raiseTmu`,
      pmu: `${BASE_URL}/pmu/raisePmu`,
      incident: `${BASE_URL}/report/submitIncidentReport`,
      accident: `${BASE_URL}/report/submitAccidentReport`,
      adminstrator: `${BASE_URL}/report/submitAdminReport`,
    };
    axios
      .post(_type[data.formType], data, {headers: {Authorization: authToken}})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
