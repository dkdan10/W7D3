import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS"

export const receiveAllItems = (items) => {
  return {
    type: RECEIVE_ALL_ITEMS,
    items
  }
}

export const fetchAllItems = () => dispatch => {
    return APIUtil.fetchAllItems()
            .then(items => dispatch(receiveAllItems(items)))
}