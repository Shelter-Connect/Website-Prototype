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
  // console.log(orgData);

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
