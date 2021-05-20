import { api } from "../apiClient";

export const getAccount = () => api.get("/account");

export const updateAccount = (body) =>
  api.put("/account", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getFriends = () => api.get("/account/me/friends");

export const getPendingRequests = () => api.get("/account/me/pending");

export const sendFriendRequest = (id) => api.post(`/account/${id}/friend`);

export const removeFriend = (id) => api.delete(`/account/${id}/friend`);

export const acceptFriendRequest = (id) =>
  api.post(`/account/${id}/friend/accept`);

export const declineFriendRequest = (id) =>
  api.post(`/account/${id}/friend/cancel`);
