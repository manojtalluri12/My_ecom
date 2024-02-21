import React, { useState } from "react";

const Form = ({ alldata, setalldata }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || mobile == " " || address == "") {
      return window.alert("please fill the form");
    }
    const newtodo = {
        id:new Date().toISOString(),
      name,
      email,
      mobile,
      address,
    };
    setalldata([...alldata, newtodo]);
    setname("");
    setemail("");
    setaddress("");
    setmobile("");
    window.alert("move to next step we have consider your address");
  };
  console.log(alldata);
  return (
    <div className="from">
      <p className="formfont">Please fil the form before going next step</p>
      <div>
        <div className="fromdelivery">
          <h4 className="formtitle">Fill the address</h4>
        </div>
        <form className="fromdelivery" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            value={mobile}
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setmobile(e.target.value)}
          />
          <textarea
            type="text"
            value={address}
            placeholder="Enter Your Address"
            className="input"
            onChange={(e) => setaddress(e.target.value)}
          />
          <input type="submit" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Form;
