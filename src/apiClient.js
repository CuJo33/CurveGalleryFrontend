import axios from "axios";
// const url = "https://hawkservices.herokuapp.com/";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  // old work
  apiCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        auth: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  // space
  // space
  // space
  // space
  // space
  // space
  // space

  // new work
  

  updateJobs(jobId, employeeId) {
    return this.apiCall("put", `${url}jobs/${jobId}/${employeeId}`);
  }

  createBooking(
    token,
    requestDate,
    requestTime,
    firstName,
    surname,
    addressLine1,
    addressLine2,
    postCode,
    telephoneNumber
  ) {
    return this.apiCall("post", `${url}booking`, {
      token,
      requestDate,
      requestTime,
      firstName,
      surname,
      addressLine1,
      addressLine2,
      postCode,
      telephoneNumber,
    });
  }

  createJob(clientId, roomId, serviceId) {
    return this.apiCall("post", `${url}job`, { clientId, roomId, serviceId });
  }

  deleteJob(jobId) {
    return this.apiCall("delete", `${url}job/${jobId}`);
  }

  createQuote(clientId, employeeId, jobList) {
    return this.apiCall("post", `${url}quote`, {
      clientId,
      employeeId,
      jobList,
    });
  }


  // new work
  async login(username, password) {
    return await axios({
      method: "POST",
      url: `${url}login`,
      data: {
        username,
        password,
      },
    });
  }


  async imagePush(username) {
    return await axios({
      method: "POST",
      url: `${url}imagePush`,
      data: {
        username
      },
    });
  }

  async imageRender(username) {
    console.log("in apiclient")
    return await axios({
      method: "GET",
      url: `${url}imageRender`,
      data: {
        username
      },
    });
  }

  async signUp(username, email, password) {
    return await axios({
      method: "POST",
      url: `${url}Signup`,
      data: {
        username,
        email,
        password,
      },
    });
  }
}
