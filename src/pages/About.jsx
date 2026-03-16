export default function About() {
    return (
        <div className="container section-padding">
            <h1 className="text-center mb-2">ABOUT THE REJECTS</h1>

            <div className="grid-2-col" style={{ alignItems: 'center' }}>
                <div className="panel">
                    <h2 className="text-primary">OUR STORY</h2>
                    <p className="lead">
                        We are "The Rejects Off The Wall" — a group of comedians, provocateurs, and absolute maniacs who refused to fit into the polite society's box.
                    </p>
                    <p className="mb-1">
                        In a world terrified of offending anyone, we decided to offend everyone. We bring you raw, unfiltered comedy that reminds you of the good old days when jokes were just jokes.
                    </p>
                    <p>
                        From our humble beginnings getting kicked out of open mic nights to building our own universe, we are here to stay.
                    </p>
                </div>
                <div>
                    <img src="/assets/poster_royalty.jpg" alt="Rejects Royalty" className="img-fluid" style={{ border: '2px solid var(--color-primary)', boxShadow: '0 0 20px rgba(255,0,255,0.3)' }} />
                </div>
            </div>

            <div className="mt-2 text-center">
                <h2>MEET THE REJECTS</h2>
                <div className="grid-auto-fit mt-2">
                    <div className="card">
                        <img src="/assets/king_face.jpg" alt="King Reject" className="img-fluid mb-1" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                        <h3>KING REJECT</h3>
                        <p className="text-secondary">The Leader / The Maniac</p>
                    </div>
                    <div className="card">
                        <img src="/assets/comic_adventures.jpg" alt="Old Man" className="img-fluid mb-1" style={{ maxHeight: '300px', objectFit: 'contain', background: '#000' }} />
                        <h3>THE LEGEND</h3>
                        <p className="text-secondary">Confrontational & Old</p>
                    </div>
                    <div className="card">
                        <img src="/assets/shirt_back.jpg" alt="The Crew" className="img-fluid mb-1" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                        <h3>THE CREW</h3>
                        <p className="text-secondary">The ones who have our back.</p>
                    </div>
                </div>
            </div>

            <div className="panel mt-2 text-center">
                <h2 className="text-accent">JOIN THE REVOLUTION</h2>
                <p className="lead">Don't just watch. Be a part of the Rejects Universe.</p>
                <div className="grid-2-col gap-1 mt-1">
                    <img src="/assets/new_years.jpg" alt="Team Rejects" className="img-fluid" />
                    <img src="/assets/team_baby_deck.jpg" alt="Team Baby Deck" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
