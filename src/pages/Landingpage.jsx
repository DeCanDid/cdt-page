import React, { useState, useEffect } from "react";
import { ArrowRight, LinkIcon } from "lucide-react";
import cdt from "../images/python.png";
import lms from "../images/graphics.png";
import sms from "../images/backend.jpg";
import { Link } from "react-router-dom";


const Landingpage = () => {
  const [text, setText] = useState("");
  const [fullText] = useState("Welcome to Creative Digita Technologies");
  const [index, setIndex] = useState(0);
  const [showSubtext, setShowSubtext] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Show subtext after typewriter completes
      setTimeout(() => {
        setShowSubtext(true);
      }, 500);
    }
  }, [index, fullText]);

  return (
    <div className="container py-5 position-relative overflow-hidden my-5">
      {/* Background Logo Images - 5 positions */}
      <div className="logo-image logo-blue logo-1"></div>
      <div className="logo-image logo-yellow logo-2"></div>
      <div className="logo-image logo-blue logo-3"></div>
      <div className="logo-image logo-yellow logo-4"></div>
      <div className="logo-image logo-blue logo-5"></div>

      {/* Typewriter header */}
      <div className="text-center mb-2 position-relative z-2">
        <h1 className="typewriter-text text-primary">
          {text}
          <span className="cursor">|</span>
        </h1>
        <p
          className={`subtext lead text-muted mb-5 ${
            showSubtext ? "show" : ""
          }`}
        >
          Innovative solutions for your digital transformation journey
        </p>
      </div>

      <div className="row g-4">
        {/* Website Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card h-100 shadow-sm card-animate">
            <img
              src={cdt}
              className="card-img-top"
              alt="Creative Digital Technologies"
              style={{ height: "50%" }}
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">Digital Solutions</h3>
              <p className="card-text flex-grow-1">
                Innovative web development and custom software solutions for
                your business needs.
              </p>
              <Link
                to="https://www.creativedigita.com"
                target="_blank"
                className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2"
              >
                Learn More
                <LinkIcon size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* LMS Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card h-100 shadow-sm card-animate">
            <img
              src={lms}
              className="card-img-top"
              alt="Learning Management System"
              style={{ height: "50%" }}
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">Learning Management</h3>
              <p className="card-text flex-grow-1">
                Comprehensive platform for online courses with progress tracking
                and collaborative learning tools.
              </p>
              <Link
                to="#lms"
                target="_blank"
                className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2"
              >
                Explore LMS
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* SMS Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card h-100 shadow-sm card-animate">
            <img
              src={sms}
              className="card-img-top"
              alt="School Management System"
              style={{ height: "50%" }}
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">School Management</h3>
              <p className="card-text flex-grow-1">
                All-in-one solution for student records, attendance, grades, and
                communications.
              </p>
              <Link
                to="#sms"
                target="_blank"
                className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2"
              >
                Discover SMS
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .position-relative {
          position: relative;
        }

        .z-2 {
          z-index: 2;
        }

        .overflow-hidden {
          overflow: hidden;
        }

        .logo-image {
          position: absolute;
          z-index: -1;
          opacity: 0.5;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .logo-blue {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="%2309f" d="M0,0 L400,0 Q500,100 400,200 L0,200 z"/></svg>');
        }

        .logo-yellow {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path fill="%23f5b700" d="M0,0 L400,0 Q500,100 400,200 L0,200 z"/></svg>');
        }

        .logo-1 {
          width: 30%;
          height: 30%;
          top: -5%;
          left: -5%;
          animation: bounce 8s infinite alternate;
          animation-delay: 0s;
        }

        .logo-2 {
          width: 25%;
          height: 25%;
          top: 20%;
          right: -5%;
          transform: rotate(90deg);
          animation: bounce 7s infinite alternate;
          animation-delay: 1s;
        }

        .logo-3 {
          width: 20%;
          height: 20%;
          bottom: 10%;
          left: 5%;
          transform: rotate(270deg);
          animation: bounce 9s infinite alternate;
          animation-delay: 2s;
        }

        .logo-4 {
          width: 35%;
          height: 35%;
          bottom: -10%;
          right: 10%;
          transform: rotate(180deg);
          animation: bounce 10s infinite alternate;
          animation-delay: 1.5s;
        }

        .logo-5 {
          width: 15%;
          height: 15%;
          top: 40%;
          left: 30%;
          transform: rotate(45deg);
          animation: bounce 6s infinite alternate;
          animation-delay: 3s;
        }

        @media (max-width: 768px) {
          .logo-1 {
            width: 50%;
            height: 20%;
            top: -2%;
            left: -10%;
          }

          .logo-2 {
            width: 40%;
            height: 15%;
            top: 15%;
            right: -10%;
          }

          .logo-3 {
            width: 30%;
            height: 15%;
            bottom: 20%;
            left: -5%;
          }

          .logo-4 {
            width: 45%;
            height: 20%;
            bottom: -5%;
            right: -5%;
          }

          .logo-5 {
            width: 25%;
            height: 10%;
            top: 40%;
            left: 20%;
          }
        }

        @keyframes bounce {
          0% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(10px) rotate(var(--rotation, 0deg));
          }
          100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
        }

        .logo-1 {
          --rotation: 0deg;
        }
        .logo-2 {
          --rotation: 90deg;
        }
        .logo-3 {
          --rotation: 270deg;
        }
        .logo-4 {
          --rotation: 180deg;
        }
        .logo-5 {
          --rotation: 45deg;
        }

        .card-animate {
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          overflow: hidden;
          position: relative;
        }

        .card-animate:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
        }

        .col-lg-4:nth-child(1) .card-animate {
          animation-delay: 0.3s;
        }

        .col-lg-4:nth-child(2) .card-animate {
          animation-delay: 0.5s;
        }

        .col-lg-4:nth-child(3) .card-animate {
          animation-delay: 0.7s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .typewriter-text {
          animation: fadeIn 1s ease-out forwards;
          margin-bottom: 0.8rem;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        .subtext {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .subtext.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Landingpage;
