import React, { useState, useEffect } from "react";
import Worker from "../assets/fancy.jpg";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../styles/About.css";
import axios from "axios";
import {Buffer} from "buffer";
import { chainPropTypes } from "@mui/utils";
const url = "http://localhost:3001/";

export default function About(props) {

  const [img, cImg]  = useState([]);

  const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />

  // useEffect(() => {
  //   const fetch = async () => {
  //   let test =  await axios({
  //               method: "POST",
  //               url: `${url}imagePush`,
  //             });
  //     console.log(test)
  //     let testImg = new Buffer.from(test.data.image.data).toString("base64")
  //     cImg((p) => [...p, testImg])
  // }
  //      fetch()
  // }, []);

  useEffect(() => {
    console.log(props)
    props.client.imageRender()
    }, []);


  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Worker})` }}
      ></div>
      <div className="rightSide">
        <h1> About Us</h1>
      </div>
      {img.map ((img, index) => {
        return (
          <Example key={index} data = {img} />
        )
      })}

    </div>
  );
}
