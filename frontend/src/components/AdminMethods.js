import axios from "axios";

// adding admin func
export const addadmin = (newUser) => {
  return axios
    .post("https://nanny-care-dashboard.herokuapp.com/AddAdmin", {
      userName: newUser.username,
      password: newUser.password,
    })
    .then((res) => {
      console.log("New Admin has been added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// adding nanny func
export const addnanny = (newNanny) => {
  return axios
    .post("https://nanny-care-dashboard.herokuapp.com:5000/AddNanny", {
      name: newNanny.name,
      phoneNumber: newNanny.phoneNumber,
      email: newNanny.email,
      place: newNanny.place,
      kidsNum: newNanny.kidsNum,
      cost: newNanny.cost,
      educationLevel: newNanny.educationLevel,
      experianceLevel: newNanny.experianceLevel,
      age: newNanny.age,
      workingHour: newNanny.workingHour,
    })
    .then((res) => {
      console.log("New Nanny has been added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// login func
export const adminlogin = (admin) => {
  return axios
    .post("https://nanny-care-dashboard.herokuapp.com:5000/AdminLogin", {
      userName: admin.username,
      password: admin.password,
    })
    .then((res) => {
        localStorage.setItem("usertoken", JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};



// TODO ?! admin profile
