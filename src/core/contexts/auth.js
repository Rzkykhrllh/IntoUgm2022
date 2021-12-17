import React, { useState, useEffect } from "react";
import { POST_REGISTER, POST_LOGIN, POST_CONTINUE_SESSION } from "../../api";

const AuthStore = () => {
  const [userData, setUserData] = useState({});

  const [dataUser, setdataUser] = useState("Kosong anjir");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("initial"); // initial | user | guest

  const authMethods = {
    // authenticate: async (token) => {
    //   const res = await POST_CONTINUE_SESSION(token);

    //   if (res.status === "OK") {
    //     setUserData(res.data.body.user_data);
    //     setToken(res.data.body.token);
    //     setStatus("user");
    //   } else {
    //     setStatus("guest");
    //   }
    // },

    login: async (props) => {
      const res = await POST_LOGIN(props);

      console.log("Woyyy jalan diluar");
      console.log(res);

      //success
      if (res.data.status === "OK") {
        setToken(res.data.body.token); //working
        setStatus("user");

        setUserData(res.data.body.user_data);
      } else {
        setStatus("guest");
      }

      return res;
    },

    register: async (props) => {
      const res = await POST_REGISTER(props);

      if (res.data.status === "OK") {
        setUserData(res.data.body.user_data);
        setToken(res.data.body.token);
        setStatus("user");
      } else {
        setStatus("guest");
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      setUserData({});
      setToken("");
      setStatus("guest");
    },
  };

  useEffect(() => {
    console.log("Woyyy harusnya ada user data");
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    //masuk
    // setStatus("user");
  }, []);

  // working
  useEffect(() => {
    console.log("save token");
    console.log(token);
    if (token) localStorage.setItem("token", token);
    else {
      console.log("ga ada token");
    }
  }, [token]);

  console.log("stussss", status);

  return {
    status,
    authMethods,
    userData,
    token,
    setStatus,
  };
};

export default AuthStore;
