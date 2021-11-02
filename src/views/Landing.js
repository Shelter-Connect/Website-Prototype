import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import MemberProfile from "components/MemberProfile.js";
import MeetingLoaves from "../assets/img/Meeting with L&F.jpg";
import Instagram from "components/Instagram";
import TeamPicture from "../assets/img/team picture.jpg";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1615897570286-da936a5dfb81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1521&q=80  )`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="px-8">
                  <h1 id="title" className="text-white font-bold text-5xl">
                    Linkare
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Nonprofit organizations are in need of donations, but people often donate items that they already have, meaning the donations go to waste.
                    With Linkare, we aim to address this issue with a streamlined communication app between nonprofits and volunteers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-hands"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Nonprofit Registration</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Partner with us! You will be invited to a call where we can get to know your needs better, and show you all the help that we provide! 
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 transition shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Who we are
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Linkare is a nonprofit, high-school led organization dedicated to helping other nonprofits sustain their businesses through initiatives like app-building, virtual food drives, and fundraisers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-box-open"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Team Application
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    This organization is the perfect place for students to get volunteer hours and make a real impact in their community. You could also apply your programming skills and develop for us as well! Simply scross to the bottom of the page to apply.                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Past and Future Events
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We created a fully functional app using Firebase and Flutter. This app allows nonprofits to request items and have that request streamlined to all the donors on the app. Currently, we have over 10 organizations and 100 volunteers on the app actively donating.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  We had a virtual food drive for Loaves and Fishes where
                  we donated 500 water bottles and 400 peanut butter jars using our
                  app's brand new update!
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  <span className="font-bold">Coming November:</span>{' '}
                  We have a panel event coming up where we are interviewing nonprofit CEOs
                  and formerly homeless individuals to see exactly how much donations have helped them
                  as well as what it takes to start a nonprofit.
                </p>
                <a
                  href="../../assets\img/Meeting with L&F.jpg"
                  className="font-bold text-gray-800 mt-8"
                >
                </a>
                </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src={MeetingLoaves}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Linkare App
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      We are most well-known for our app, Linkare! Between 2020 and 2021, we coded an app to help other nonprofits request items and have that information streamlined to other donors.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src= {TeamPicture}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 mt-6 md:mt-0 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    What do we do?
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Here at Linkare, we are driven by a single goal: to do our part in making the world a better place for all. We have designed an app that allows nonprofits to request certain items that they are in need of. That request is then sent to all volunteers near the area, who will then drop off the requested items to the shelter.
                    <br />
                    <br />
                    Daniel Armstrong of CityTeam: <b><i>“Linkare provides a way for us to request whatever we need and have it delivered to our doorstep within a week. It doesn’t get much easier than that.”</i></b>
                    <br />
                    <br />
                    Gisela Bushy of Loaves and Fishes: <b><i>"The app is user-friendly, quite intuitive, and well-supported by the team that created this mobile app. We are delighted to be a part of their efforts to help people in the community connect to causes they care about."</i></b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-5xl font-bold">
                  Meet the Team
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap space-y-80">
              <MemberProfile name="Nathan Palamuttam" role="CEO" />
              <MemberProfile name="Rick Yanashita" role="Co-Founder" />
              <MemberProfile name="Nathan Gong" role="Backend + Web Development Lead" />
              <MemberProfile name="Ethan Yu" role="Backend Lead" />
              <MemberProfile name="Aidan Huynh" role="Marketing Lead" />
              <MemberProfile name="Jono Moore" role="Organization Outreach Lead" />
              <MemberProfile name="Ryan Chan" role="Social Media Manager" />
              <MemberProfile name="Rishi Pasumarthi" role="Prototype Testing Lead" />
              <MemberProfile name="Christopher Lai" role="Outreach Lead" />
              <MemberProfile name="Leo Ying" role="Marketing Lead" />
              <MemberProfile name="Luke Desouza-Lawrence" role="Outreach Lead" />
              <MemberProfile name="Richard Lin" role="Fullstack Software Lead" />
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <h2 className="flex justify-center text-5xl font-bold mb-8">
            Instagram
          </h2>
          <Instagram />
        </section>

        <section className="pb-20 relative block bg-gray-900">
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Linkare's Values
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-hands text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Service
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  We are dedicated to serving the people in our community and helping
                  to improve their lives.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Community
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Working with our community is important to us, and we directly 
                  partner with nonprofit organizations.  
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-users"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Teamwork
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  As the adage goes, there's no "I" in "team"! We emphasize teamwork 
                  as the key to success both in Linkare and in our community. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to partner with us or join our team?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Fill out this form below.
                    </p>
                    <form name="contact-us" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="contact-us" />
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          name="name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          name="email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                          name="message"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
