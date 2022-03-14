import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import {
  onSnapshot,
  collection,
  doc,
  query,
  firestore,
} from "firebase/firestore";
import { db } from "../firebase";
import OrgNavbar from "../components/OrgNavbar";
import Footer from "../components/Footer";

export default function SingleOrg() {
  // Grab org ID from URL parameters
  const { id } = useParams();
  // console.log(id);

  // Makes call to organization documents in firestore
  const [orgData, setOrgData] = React.useState([]);
  useEffect(() => {
    const q = query(collection(db, "organizations"));
    onSnapshot(q, (querySnapshot) => {
      setOrgData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(orgData);

  return (
    <>
      <OrgNavbar />
      <main>
        <div
          className='relative pt-16 pb-32 flex content-center justify-center'
          style={{ minHeight: "87vh" }}
        >
          {orgData
            .filter((orgData) => orgData.id === id)
            .map((organization) => (
              <div
                className='singleOrginfo'
                style={{ textAlign: "center" }}
                key={organization.id}
              >
                <h2 style={{ fontWeight: "bold", fontSize: "x-large" }}>
                  {organization.data.name}
                </h2>
                <p style={{ fontSize: "large" }}>
                  Address: {organization.data.address ? `${organization.data.address}` : 'None Available'}
                </p>

                <div
                  className='singleOrgAbout'
                  style={{ marginTop: "15px", marginBottom: "15px", border: 'solid', borderWidth: '2px', marginRight: '10px', marginLeft: '10px' }}
                >
                  <p style={{ fontSize: "large", paddingLeft: "15px", paddingRight: '15px', marginBottom: '10px' }}>
                    {organization.data.description}
                  </p>
                  <a
                    href={organization.data.donationLink}
                    style={{ color: "blue", fontSize: "large" }}
                  >
                    {organization.data.donationLink}
                  </a>
                  <p style={{ marginTop: "10px", fontSize: "large" }}>
                    Email: {organization.data.email}
                  </p>
                  <p style={{ fontSize: 'large', marginTop: '10px' }}>
                    Phone: {organization.data.number ? `${organization.data.number}` : 'None Available'}
                  </p>
                  <div className='schedule' style={{ marginTop: '10px' }}>
                    {/* If schedule exists, starts process for each day */}
                    {/* Parsing formula is organization.data.schedule.Frday[0].toDate().getHours() */}
                    <p>Schedule: <br />  

                    { organization.data.schedule.Monday[0] ? `Monday: ${organization.data.schedule.Monday[0].toDate().getHours()}00 - ${organization.data.schedule.Monday[1].toDate().getHours()}00` : 'Monday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Tuesday[0] ? `Tuesday: ${organization.data.schedule.Tuesday[0].toDate().getHours()}00 - ${organization.data.schedule.Tuesday[1].toDate().getHours()}00` : 'Tuesday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Wednesday[0] ? `Wednesday: ${organization.data.schedule.Wednesday[0].toDate().getHours()}00 - ${organization.data.schedule.Wednesday[1].toDate().getHours()}00` : 'Wednesday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Thursday[0] ? `Thursday: ${organization.data.schedule.Thursday[0].toDate().getHours()}00 - ${organization.data.schedule.Thursday[1].toDate().getHours()}00` : 'Thursday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Friday[0] ? `Friday: ${organization.data.schedule.Friday[0].toDate().getHours()}00 - ${organization.data.schedule.Friday[1].toDate().getHours()}00` : 'Friday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Saturday[0] ? `Saturday: ${organization.data.schedule.Saturday[0].toDate().getHours()}00 - ${organization.data.schedule.Saturday[1].toDate().getHours()}00` : 'Saturday: Closed/Unavailable' } <br />
                    { organization.data.schedule.Sunday[0] ? `Sunday: ${organization.data.schedule.Sunday[0].toDate().getHours()}00 - ${organization.data.schedule.Sunday[1].toDate().getHours()}00` : 'Sunday: Closed/Unavailable' } <br />
                   
                     
                     

                    
                    
                    
                    
            
                    
                  </p>
                    </div>
                </div>

                <div className='orgRequests'>
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "x-large",
                      marginBottom: "10px",
                    }}
                  >
                    Requests
                  </h3>
                  <div className='flex content-center, justify-center'>
                    {organization.data.itemCategories.map((itemRequests) => (
                      <p key={itemRequests.index} style={{ fontSize: "large", padding: '10px' }}>
                        {itemRequests}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
