import React from "react";
import { Copyright } from "./Copyright";
import { Frame } from "./Frame";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import momoStudioCyz5Rtezq3YUnsplashRemovebgPreview1 from "./momo-studio-cyz5rtezq3y-unsplash-removebg-preview-1.png";
import "./style.css";
import untitledDesignRemovebgPreview1 from "./untitled-design-removebg-preview-1.png";

export const HomePage = () => {
  return (
    <div className="HOME-PAGE">
      <div className="div">
        <div className="frame-2">
          <header className="header">
            <div className="frame-3">
              <img
                className="untitled-design"
                alt="Untitled design"
                src={untitledDesignRemovebgPreview1}
              />

              <div className="text-wrapper-2">Symptom and care tracker</div>
            </div>

            <div className="text-wrapper-3">Home</div>

            <Frame
              className="frame-instance"
              divClassName="frame-3-instance"
              property1="default"
              vector="vector-1-2.svg"
            />
            <div className="text-wrapper-4">Appointments</div>

            <div className="text-wrapper-4">Contact Us</div>
          </header>

          <p className="p">
            AI-Powered Symptom Checker - Fast, Accurate, and Reliable Health
            Insights!
          </p>

          <img
            className="momo-studio"
            alt="Momo studio"
            src={momoStudioCyz5Rtezq3YUnsplashRemovebgPreview1}
          />

          <PropertyDefaultWrapper className="frame-6" />
        </div>

        <div className="frame-4">
          <PropertyDefaultWrapper />
          <PropertyDefaultWrapper />
          <PropertyDefaultWrapper />
          <PropertyDefaultWrapper />
          <PropertyDefaultWrapper />
          <PropertyDefaultWrapper />
        </div>

        <div className="frame-5">
          <p className="text-wrapper-5">
            It is far more important to know what person the disease has than
            what disease the person has.
          </p>

          <div className="text-wrapper-6">– William Osler</div>
        </div>

        <div className="frame-wrapper">
          <div className="frame-7">
            <PropertyDefaultWrapper />
            <PropertyDefaultWrapper />
            <PropertyDefaultWrapper />
            <PropertyDefaultWrapper />
            <PropertyDefaultWrapper />
            <PropertyDefaultWrapper />
          </div>
        </div>

        <Copyright className="copyright-instance" />
      </div>
    </div>
  );
};
