import { api } from "../apiClient";

export const getAccount = () => api.get("/account");

export const updateAccount = (body) =>
  api.put("/account", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getFriends = () => null;

export const getPendingRequests = () => null;

export const sendFriendRequest = () => null;

export const removeFriend = () => null;

export const acceptFriendRequest = (id) =>
  api.post(`/account/${id}/friend/accept`);

export const declineFriendRequest = (id) =>
  api.post(`/account/${id}/friend/cancel`);
