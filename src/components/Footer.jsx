export default function Footer() {
    return (
        <footer>
            <div className="container">
                <h3>THE REJECTS OFF THE WALL</h3>
                <p>Unapologetically helping the world laugh again.</p>
                <p>&copy; {new Date().getFullYear()} Rejects Universe. All Rights Reserved.</p>
                <div style={{ marginTop: '1rem' }}>
                    <a href="#" style={{ margin: '0 10px' }}>Facebook</a>
                    <a href="#" style={{ margin: '0 10px' }}>Twitter</a>
                    <a href="#" style={{ margin: '0 10px' }}>Instagram</a>
                </div>
            </div>
        </footer>
    );
}
