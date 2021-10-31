import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="IGQVJXOWc3Ti1uXzhldksxcWlFcTY3LWVxR25wT0dPTTlMV0wxSi14b3d2aFRhU2ZAIcHpfbldRUU0zdGROQnhWMU9VN1VLU1Q5VUdBdUszaDBVZAXNOR2U2YUR1TlFEeTNLRi1rYjdSVDA2MGhTaWtRRAZDZD"  counter="6"/>
            </div>
        </section>
    );
}

export default Instagram