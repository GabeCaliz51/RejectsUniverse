export default function Podcast() {
    const episodes = [
        {
            id: 101,
            title: "Ep 101: The World Has Gone Mad",
            date: "2025-12-15",
            duration: "1h 12m",
            desc: "We discuss the latest viral outrage and why everyone needs to calm down."
        },
        {
            id: 102,
            title: "Ep 102: Cancel This",
            date: "2025-12-22",
            duration: "58m",
            desc: "A deep dive into the history of comedy and why it shouldn't be safe."
        },
        {
            id: 103,
            title: "Ep 103: Guest Starring King Reject",
            date: "2026-01-05",
            duration: "1h 30m",
            desc: "Special interview with the man himself."
        }
    ];

    return (
        <div className="container section-padding">
            <h1>THE PODCAST</h1>
            <p className="lead">Unfiltered, unedited, and unapologetic.</p>

            <div className="episode-list">
                {episodes.map(ep => (
                    <div key={ep.id} className="card flex-col-gap mb-2">
                        <div className="flex-center-between">
                            <h3 style={{ margin: 0 }}>{ep.title}</h3>
                            <span className="text-primary">{ep.duration}</span>
                        </div>
                        <small className="text-muted">{ep.date}</small>
                        <p>{ep.desc}</p>
                        <button className="btn btn-sm" style={{ width: 'fit-content' }}>
                            PLAY EPISODE
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
