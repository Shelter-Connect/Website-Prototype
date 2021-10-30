import React from 'react';
import 'react-ig-feed/dist/index.css'
import InstagramFeed  from 'react-ig-feed'

const Instagram = () => {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <InstagramFeed token="AQAda-iEYTHKyuaJH24wCZdu8jhAaQxaS3tunWPC2bTDbG_r-Td5fkV8tdwj0MVsOIINhujcP_CvWlP6JA8ZjC5atpyZDL8sArxIP7zNG8LC9HWpx9zD0_cDpgqtziCEkCMvPBFOBClfkXsdaG5pZKyGGcToIdfT5eTYdO3mpwlI0lz54s9r6cb9ytEZ80IepmZCVfqd4HYENxETbmE0nqr_U_0PwogooNHrMpajuAKYbg"  counter="6"/>
            </div>
        </section>
    );
}

export default Instagram