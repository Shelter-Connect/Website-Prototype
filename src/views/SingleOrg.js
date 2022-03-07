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

              <div className='singleOrginfo' style={{ textAlign: 'center' }} key={organization.id}>
                <h2 style={{ fontWeight: 'bold' }}>{organization.data.name}</h2>
                <p>Address: {organization.data.address}</p>

                <div className='singleOrgAbout'>
                  <p>{organization.data.description}</p>
                  <a href={organization.data.donationLink}>{organization.data.donationLink}</a>
                  <p>{organization.data.email}</p>
                </div>

              <div className='orgrequests'>
                <h3>Requests</h3>
                {organization.data.itemCategories.map((itemRequests) => (
                  <p key={itemRequests.index}>{itemRequests}</p>
                ))}
              </div>

              </div>

            ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
