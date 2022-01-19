import React, { useEffect } from "react";

// Firestore methods
import firebase from "firebase";
import { onSnapshot, collection, doc, query } from "firebase/firestore";
import { db } from "../firebase";

function OrgCards() {
  const [orgs, setOrgs] = React.useState([]);

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
    <div>
      <ul>
        {orgs.map((organization) => (
          <li key={organization.data.name}>{organization.data.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrgCards;
