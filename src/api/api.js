import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://eventkiosk.snabel.pl/api/v1/events/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.REACT_APP_TOKEN_AUTORYZACYJNY,
  },
});

export const getEventsAPI = () => {
  return instance.get();
};
