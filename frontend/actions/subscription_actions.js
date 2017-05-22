import * as APIUtil from '../util/subscription_api_util';
import { receiveCurrentUser } from './session_actions';
export const createSubscription = subscription => dispatch => (
  APIUtil.createSubscription(subscription)
  .then(user => dispatch(receiveCurrentUser(user)))
);
