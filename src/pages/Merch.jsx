export default function Merch() {
    const products = [
        {
            id: 1,
            name: "King Reject Tank Top",
            price: "$25.00",
            image: "/assets/king_reject.jpg"
        },
        {
            id: 2,
            name: "Universe Hoodie",
            price: "$45.00",
            image: "/assets/logo_space_2.jpg"
        },
        {
            id: 3,
            name: "Off The Wall Sticker Pack",
            price: "$10.00",
            image: "/assets/logo_badge.jpg"
        }
    ];

    return (
        <div className="container section-padding">
            <h1>OFFICIAL MERCH</h1>
            <div className="grid-auto-fit mt-2">
                {products.map(p => (
                    <div key={p.id} className="card text-center">
                        <div style={{ height: '200px', overflow: 'hidden', marginBottom: '15px', borderRadius: '5px' }}>
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <h3>{p.name}</h3>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{p.price}</p>
                        <button className="btn w-full mt-1" style={{ fontSize: '1rem' }}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
