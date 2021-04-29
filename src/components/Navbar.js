import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      transparent: true
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 10) {
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
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (this.state.transparent ? "text-white" : "text-gray-800") +
                " transition duration-300 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
              href=""
            >
              Linkare
            </a>
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
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (this.state.navbarOpen ? " block rounded shadow-lg" : " hidden")
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
                    " transition duration-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
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
                    " transition duration-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (this.state.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " transition duration-300 fab fa-linkedin text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (this.state.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " transition duration-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (this.state.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " transition duration-300 fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className={
                    (this.state.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-blue-500 text-white active:bg-blue-600") +
                    " transition duration-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
