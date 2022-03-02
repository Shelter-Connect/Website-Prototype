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

              <div className='singleOrginfo' key={organization.id}>
                <h2>{organization.data.name}</h2>
              </div>

            ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
