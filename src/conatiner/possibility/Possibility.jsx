import React from "react";
import "./possibility.css";
import ar from "../../assets/ar.jpg";

export default function Possibility() {
  return (
    <div className="gtp_possibility section__margin">
      <div className="gpt_image">
        <img src={ar} alt="" />
      </div>
      <div className="gpt_possibility_container">
        <h4 className="">Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>

        <p className="">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <h4 className="gradient__text">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
