import React from "react";
import "../organizations.css";

import OrgNavbar from "components/OrgNavbar.js";
import Footer from "components/Footer.js";
import OrgCards from "components/OrgCards";

export default function Organizations() {
  return (
    <>
      <OrgNavbar />
      <main>
        <div
          className='relative pt-16 pb-32 flex content-center justify-center'
          style={{ minHeight: "87vh" }}
        >
          <div className='orgSection'>
            <div className='orgHeader'>
              <h2>List of Organizations</h2>
            </div>
            <div className='orgList'>
              <OrgCards />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}