import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container hero-content">
                    <img src="/assets/logo_space_2.jpg" alt="Rejects Universe Logo" className="hero-logo" />
                    <h1 className="title-anim">WELCOME TO THE<br />REJECTS UNIVERSE</h1>
                    <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '20px auto', textTransform: 'uppercase' }}>
                        WE ARE THE ANTI-WOKE, ANTI-CANCEL CULTURE COMEDY GROUP THAT WANTS TO HELP THE WORLD GET BACK TO LAUGHING AGAIN.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/podcast" className="btn">LISTEN NOW</Link>
                        <Link to="/merch" className="btn">GET GEAR</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding text-center reveal">
                <h2>LATEST FROM THE UNIVERSE</h2>
                <div className="grid-auto-fit mt-2">
                    <div className="card">
                        <img src="/assets/joker_reject.jpg" alt="Joker Reject" className="img-fluid mb-1" style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} />
                        <h3>NEW EPISODE</h3>
                        <p>The Rejects take on the latest internet drama. You won't believe what happened.</p>
                        <Link to="/podcast" className="text-primary">Listen &rarr;</Link>
                    </div>
                    <div className="card">
                        <img src="/assets/reject_originals_badge.jpg" alt="Reject Badge" className="img-fluid mb-1" style={{ maxHeight: '200px', objectFit: 'contain' }} />
                        <h3>KING REJECT</h3>
                        <p>Who will be crowned this month? Check out the latest merch drop.</p>
                        <Link to="/merch" className="text-primary">Shop Now &rarr;</Link>
                    </div>
                    <div className="card">
                        <h3>DAILY TRIVIA</h3>
                        <p>Think you know your stuff? Test your knowledge and win bragging rights.</p>
                        <Link to="/trivia" className="text-primary">Play Now &rarr;</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
