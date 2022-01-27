import React, { Component } from "react";
import Logo from "../assets/img/logo.png";
import "../styles.css"
import { Link } from 'react-router-dom';

class OrgNavbar extends Component {
  constructor(props) {
    super(props);

    let iOS = false;
    if (navigator.appVersion.indexOf("Mac") !== -1) iOS = true;
    if ([
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) {
      iOS = true;
    }
    console.log(iOS)
    
    this.state = {
      navbarOpen: false,
      transparent: true,
      iOS: iOS
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      var rect = document.getElementById("title").getBoundingClientRect();

      if (scrolled >= rect.top + rect.height*2) {
        if (this.state.transparent) {
          this.setState({ transparent: false });
        }
      } else {
        if (!this.state.transparent) {
          this.setState({ transparent: true });
        }
      }
    });
  }

  render() {
    return (
      <nav
        className={
          (this.state.transparent ? "" : "bg-white shadow-lg") +
          " transition duration-300 fixed z-50 w-full px-2 py-3 flex justify-between items-center"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:justify-start">
            <img
              src={Logo}
              alt="Linkare Logo"
              className="w-auto h-10 lg:h-20 float-left inline-block"
            />
            <span
              className={
                (this.state.transparent ? "fadeOut" : "fadeIn") +
                " text-gray-800 transition duration-300 text-lg ml-2 font-bold leading-relaxed inline-block mr-2 whitespace-nowrap uppercase text-xl"
              }
            >
              Linkare
            </span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}
            >
              <i
                className={
                  (this.state.transparent ? "text-white" : "text-gray-800") +
                  " transition duration-300 fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "transition lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none mt-1" +
              (this.state.navbarOpen ? " block rounded px-3 lg:px-0" : " hidden") +
              (this.state.transparent ? " shadow-lg" : "")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (this.state.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " transition duration-300 pr-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.instagram.com/linkare.app"
                  target = "_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (this.state.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " transition duration-300 fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Follow</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (this.state.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " transition duration-300 pr-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.facebook.com/linkare.app.98"
                  target = "_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (this.state.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " transition duration-300 fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (this.state.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " transition duration-300 pr-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.linkedin.com/company/linkare20/?viewAsMember=true"
                  target = "_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (this.state.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " transition duration-300 fab fa-linkedin text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Follow</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (this.state.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-blue-500 text-white active:bg-blue-600") +
                    " transition duration-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                  }
                  href={"https://apps.apple.com/us/app/linkare/id1528076084"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </a>
              </li>
              <li className="flex items-center">
                <Link to='/'
                  className={
                    (this.state.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-blue-500 text-white active:bg-blue-600") +
                    " transition duration-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                  }
                >
                 Home
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default OrgNavbar;
