import React from "react";
import firebase from 'firebase';
import { onSnapshot, collection, doc, query } from 'firebase/firestore';
import { db } from '../firebase';

import OrgNavbar from "../components/OrgNavbar";
import Footer from "../components/Footer";

export default function SingleOrg() {
  return (
    <>
      <OrgNavbar />

      <Footer />
    </>
  );
}
