// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     localStorage.setItem('user', JSON.stringify(user));
//     alert('Registration successful!');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
//       <div className="bg-gradient-to-b w-full rounded-3xl max-w-md" style={{ background: "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)" }}
//       >
//         <h2 className="text-lg font-medium  text-white text-start pt-8 pl-7 "
//         >Create an account</h2>

//         <form onSubmit={handleSubmit} className="space-y-4  p-4 justify-center">
//           <div className=' pl-3  '>
//             <input
//               type="text"
//               id="name"
//               placeholder="Name"
//               className=" w-[97%] p-3 pl-5 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className='pl-3'>
//             <input
//               type="email"
//               id="email"
//               placeholder="E-Mail ID"
//               className="w-[97%] p-3 pl-5 h-10 border  border-zinc-300  rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='pl-3'>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               className="w-[97%] pl-5 h-10 border border-zinc-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className=" pl-3 pt-2">
//             <button
//               type="submit"
//               className="w-[97%] pl-3 text-xl  font-semibold h-14 rounded-md text-[#0098f1] bg-white   "
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         <p className=" text-center text-white pb-8">
//           Already have an account? {" "}
//           <Link to="/login" className="">
//             {" "} Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
      role,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setIsRegistered(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0098F1]">
      {isRegistered ? (
        <div className="text-center p-8 items-center border-white border-4 justify-center shadow-md rounded-xl">
          <div className="flex justify-center items-center   mb-4">
            <FaCheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-lg font-semibold">
            Registration successful!
          </h2>
        </div>
      ) : (
        <div
          className="bg-gradient-to-b  w-full max-w-xl rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 88, 139, 0.1936) 0%, rgba(0, 88, 139, 0.1936) 100%)",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-medium text-white text-center pt-8 ">
              Create an account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <div className="pl-10 relative ">
              <select
                id="role"
                className="w-[90%] pl-3 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                style={{ backgroundPosition: "calc(100% - 10px) center" }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
                <option value="hrAdmin">HR Admin</option>
                <option value="superAdmin">Super Admin</option>
              </select>
            </div>
            <div className="pl-10">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-[90%] p-3 pl-5 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="pl-10">
              <input
                type="email"
                id="email"
                placeholder="E-Mail ID"
                className="w-[90%] p-3 pl-5 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="pl-10 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-[90%] p-3 pl-5 h-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-9 pr-6 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="text-gray-500 ml-4" />
                ) : (
                  <FaEye className="text-gray-500 ml-4" />
                )}
              </div>
            </div>
            <div className="pl-10 pt-2">
              <button
                type="submit"
                className="w-[90%] h-14 rounded-md text-[#0098F1] bg-white font-semibold text-xl"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-white pb-8">
            Already have an account?{" "}
            <a href="/login" className="text-[#ffffff] underline">
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Register;
