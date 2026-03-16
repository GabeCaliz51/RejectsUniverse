export default function News() {
    const newsItems = [
        {
            id: 1,
            title: "WE ARE LIVE!",
            date: "2026-01-26",
            content: "The Rejects Universe website is officially live. Explore the new hub for all things offensive and hilarious.",
            image: "/assets/logo_3d.jpg"
        },
        {
            id: 2,
            title: "UPCOMING TOUR DATES",
            date: "2026-02-01",
            content: "We are hitting the road. Check back soon for tickets to a city near you. No safe spaces allowed.",
            image: "/assets/rustys_meme.jpg"
        }
    ];

    return (
        <div className="container section-padding">
            <h1>NEWS & UPDATES</h1>
            <div className="news-grid mt-2">
                {newsItems.map(item => (
                    <article key={item.id} className="card article-card">
                        {item.image &&
                            <img src={item.image} alt={item.title} className="news-img" />
                        }
                        <div>
                            <small className="text-secondary">{item.date}</small>
                            <h3 className="mt-1">{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
