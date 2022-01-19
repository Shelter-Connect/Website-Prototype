import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// CSS
import "../organizations.css";

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
    <div className='orgCards'>
      
        {orgs.map((organization) => (

          <div className='orgCardSingle border border-solid' key={organization.data.name}>
              <h4 className='orgCardHeader'>{organization.data.name}</h4>
              <p className='orgDescription'>{organization.data.description}</p>
              <p className='orgAddress'>Address: {organization.data.address}</p>
              <Link to={`/orgs/${organization.id}`} className='orgLink'>View Organization</Link>

          </div>

        ))}
      
    </div>
  );
}; 

export default OrgCards;
