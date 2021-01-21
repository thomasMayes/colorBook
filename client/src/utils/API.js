import axios from "axios";
// const baseUrl = `${process.env.REACT_APP_BASE_URL}`;

export default {
  getUser: () => {
      return  axios.get("/api/user");
    },
  login:(email , password)=>{
    return axios.post("/api/auth/login", { email, password })
  },
  register:(name, email, password)=>{
    return axios.post("/api/auth/register", { name, password, email })
  },
  adjustCredits: (adjustment, id)=>{
    return axios.post("/api/poker/credits", { adjustment , id })
  },
  logGameData: (data)=>{
    return axios.post("api/poker/data", data)
  },
  getPokerData: (data)=>{
    return axios.get("api/poker/data")
  },
  getItems: ()=>{
    return axios.get('/api/items')
  },
  newItem: (formData, config)=>{
    return axios.post('/api/items', formData, config)
  },
  updateName: (name)=>{
    return axios.post('/api/user/updatename', {name})
  },
  updateEmail: (email)=>{
    return axios.post('/api/user/updateemail', {email})
  },
  updatePassword:  (currentPassword, newPassword)=>{
    return axios.post('/api/user/updatepassword', {currentPassword, newPassword})
  },
  getCurrentArtist: (id)=>{
    return axios.post('/api/user/currentartist', {id}) 
  }








  // search: function(query) {
  //   return axios.get(BASEURL + query );
  // },
  // // Gets all books
  // getBooks: function() {
  //   console.log("got");
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   console.log('hit');
  //   return axios.post("/api/books", bookData);
  // }
};
