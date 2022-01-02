import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJYeXZA4RXp1ckJSY01MN2lvTE9yWTBzNldfYjNBR3lIcmRPMGhSMXN5dm9xOWJ3bnAxdTZATRzM3cGRVc0NzanlnSXcycm52U1FFLTFpei1RUG9XYUM2ZAzk5RS1KeXVRazMxdE05WlRDTTczc3VJRQZDZD"  counter="6"/>
            </div>
        </section>
    );
}

export default Instagram
