import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <a href="https://www.instagram.com/linkare.app" target="_blank" rel="noreferrer"
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram mt-0"></i>
              </a>
              <a href="https://www.facebook.com/linkare.app.98" target="_blank" rel="noreferrer"
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/company/linkare20/?viewAsMember=true" target="_blank" rel="noreferrer"
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/linkare20/?viewAsMember=true">LinkedIn
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        target="_blank" rel="noreferrer" href="https://www.instagram.com/linkare.app/">Instagram
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=linkare.phase1">Google Play Download
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/linkare/id1528076084">Apple Download
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Support
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="mailto:linkare22@gmail.com">Contact Us
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
