import api from "./api/axios";

// Function to log in a user and retrieve a JWT token
export const login = async (username, password) => {
  try {
    const response = await api.post("/login", {
      username,
      password,
    });

    console.log("OK");
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Function to retrieve the JWT token from storage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Function to store the JWT token in storage
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Function to remove the JWT token from storage
export const removeToken = () => {
  localStorage.removeItem("token");
};
