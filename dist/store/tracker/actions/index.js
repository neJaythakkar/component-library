import Name from '../';
import axios from 'axios';
import { apiUrl } from '../../../conf';
import * as TrackerActionTypes from '../actionTypes';
import { createSetter } from '../../helpers';
export const [resetEvents] = createSetter(Name, [TrackerActionTypes.RESETEVENTS]);
export const addEvents = payload => ({
  type: `${Name}/${TrackerActionTypes.ADDEVENTS}`,
  payload
});
export const postEvents = payload => (dispatch, getState) => {
  const {
    url,
    userId
  } = payload;
  const {
    tracker: {
      events
    }
  } = getState();
  return axios.post(`${url || `${apiUrl}events`}`, {
    userId,
    events
  });
};