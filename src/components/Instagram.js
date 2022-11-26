import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJVTWlLOWlQT2FQWmFuWWJaaUlHejBJMUFoZAS05SkpwZADRwczlzTkVvcWxLZAmMzQzRKLUQ5cU1CMnBxeWlGN1BFVF80djQtV3BzSnlGZAVduLWNyMDR3TlNRRGRHelVMa3otaXVRVUtFbnZAvcTFSSgZDZD"  counter="6"/>
            </div>
        </section>
    );
}

export default Instagram
