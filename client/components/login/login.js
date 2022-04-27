import { TrashIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state
  const {state, dispatch} = useContext(Context)

  // router
  const router = useRouter()

  console.log("STATE =>", state)

 
  const handleSubmit = async (e) => {
    // Prevent browser from refreshing
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE =>", data);
       dispatch({
         type: "LOGIN",
         payload: data,
       });

       // save in local storage
       window.localStorage.setItem('user', JSON.stringify(data))

       // redirect 
       router.push('/')

      // console.table({name, email, birth,password});
    } catch (err) {
      console.log(err.response.data)
    }
  };

  
  return (
    <div className="absolute w-[100vw] h-[100vh] top-0 bg-gray-700 opacity-90 flex justify-center items-center">
      <Head>
        <title>Twitter | Sign In</title>
      </Head>

      <div className=" text-white flex flex-col w-[30rem] bg-black py-8 px-6 rounded-3xl">
        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <TrashIcon
              onClick={() => {
                set_state("");
              }}
              className="cursor-pointer w-[15%]"
            />
          </div>
          <div className="flex justify-start">
            <img
              className="cursor-pointer"
              src="logo.png"
              onClick={() => {
                set_state("");
              }}
            ></img>
          </div>
        </div>

        <div className="flex justify-center">
          <h3 className="font-bold text-[1.5rem] mt-4">
            Sign in to your account
          </h3>
        </div>
        <input
          onChange={(e) => {
            set_email(e.target.value);
          }}
          className="focus:border-2 focus:border-blue-500 bg-black px-2 py-3 mx-2 my-4 text-white border-2 rounded-xl outline-none"
          placeholder="email"
        ></input>

        <div className="flex">
          <input
            onChange={(e) => {
              set_password(e.target.value);
            }}
            type={password_type}
            className="w-[85%] focus:border-2 focus:border-blue-500 bg-black px-2 py-3 mx-2 my-4 text-white border-2 rounded-xl outline-none"
            placeholder="password"
          ></input>
          {password_type === "password" ? (
            <button
              onClick={() => {
                set_password_type("text");
              }}
              className="flex items-center justify-center w-[15%]"
            >
              <EyeIcon className="w-[1.5rem]" />
            </button>
          ) : (
            <button
              onClick={() => {
                set_password_type("password");
              }}
              className="flex items-center justify-center w-[15%]"
            >
              <EyeOffIcon className="w-[1.5rem]" />
            </button>
          )}
        </div>

        <button
          onClick={() => {
            login();
          }}
          className="bg-white mt-4 text-black rounded-3xl font-bold px-2 py-2 duration-300 hover:bg-gray-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
