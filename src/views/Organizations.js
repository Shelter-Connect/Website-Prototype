import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import OrgList from 'components/orgList/orglist';

export default function Organizations() {
    return (
        <>
        <Navbar />
        <main>
            <OrgList />
        </main>
        <Footer />
        </>
    )
}