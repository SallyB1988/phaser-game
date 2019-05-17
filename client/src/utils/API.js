import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Gets users in descending order based on highScore
  getScores: function() {
    return axios.get("/api/scores");
  },
  // Updates a user with new highScore value
  updateScore: function(id, scoreData) {
    axios.put(`/api/scores/${id}`, { highScore: scoreData} )
  }
};
