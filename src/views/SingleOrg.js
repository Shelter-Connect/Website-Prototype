import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import { onSnapshot, collection, doc, query } from 'firebase/firestore';
import { db } from '../firebase';

import OrgNavbar from "../components/OrgNavbar";
import Footer from "../components/Footer";

export default function SingleOrg() {
    const [org, setOrg] = React.useState([]);

    const { id } = useParams();
    console.log(id);

  return (
    <>
      <OrgNavbar />

      <Footer />
    </>
  );
}
