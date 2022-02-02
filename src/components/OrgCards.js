import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// CSS
import "../organizations.css";

// React Icons
import { BsGlobe } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa";

// Firestore methods
import firebase from "firebase";
import { onSnapshot, collection, doc, query } from "firebase/firestore";
import { db } from "../firebase";

function OrgCards() {
  const [orgs, setOrgs] = React.useState([]);
  // This makes the call to the database for all organizations
  useEffect(() => {
    const q = query(collection(db, "organizations"));
    onSnapshot(q, (querySnapshot) => {
      setOrgs(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(orgs);

  return (
    <div className='orgCards'>
      {/* Going over each item in the organization list to create a card element, filtering out the test org */}
      {orgs
        .filter((orgs) => orgs.data.name !== "Linkare Test Organization")
        .map((organization) => (
          <div
            className='orgCardSingle border border-solid'
            key={organization.data.name}
          >
            <h4
              className='orgCardHeader'
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Render Icon, Carrot for food drive, globe for others */}
              {organization.data.foodDrive === false ? (
                <BsGlobe
                  size={30}
                  style={{ paddingRight: "5px", color: "blue" }}
                />
              ) : (
                <FaCarrot
                  size={30}
                  style={{ paddingRight: "5px", color: "blue" }}
                />
              )}
              {organization.data.name}
            </h4>
            <p className='orgDescription'>{organization.data.description}</p>
            <p className='orgAddress'>
              Address:{" "}
              {organization.data.address
                ? `${organization.data.address}`
                : "None available"}
            </p>
            {/* This link leads to a URL that we can use to have our single org page.  */}
            <Link to={`/orgs/${organization.id}`} className='orgLink'>
              View Organization
            </Link>
          </div>
        ))}
    </div>
  );
}

export default OrgCards;
