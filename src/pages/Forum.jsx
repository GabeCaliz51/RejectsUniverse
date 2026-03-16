import { useState } from 'react';

export default function Forum() {
    // Mock Data for Forum Threads
    const [threads, setThreads] = useState([
        {
            id: 1,
            title: "Is comedy officially dead?",
            author: "Joker123",
            replies: 45,
            views: 1205,
            lastPost: "2 mins ago"
        },
        {
            id: 2,
            title: "Petition to bring back 90s humor",
            author: "RetroKing",
            replies: 112,
            views: 3400,
            lastPost: "1 hour ago"
        },
        {
            id: 3,
            title: "King Reject's latest rant - THOUGHTS?",
            author: "FanBoy_99",
            replies: 8,
            views: 200,
            lastPost: "5 hours ago"
        }
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        const newThread = {
            id: threads.length + 1,
            title: newTitle,
            author: "You (Guest)",
            replies: 0,
            views: 1,
            lastPost: "Just now"
        };
        setThreads([newThread, ...threads]); // Add to top
        setShowForm(false);
        setNewTitle("");
        setNewContent("");
        alert("Posted! (Note: This will disappear on refresh as there is no database yet.)");
    };

    return (
        <div className="container section-padding">
            <div className="flex-center-between mb-2">
                <h1>THE FORUM</h1>
                <button className="btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "CANCEL" : "NEW DISCUSSION"}
                </button>
            </div>

            {showForm && (
                <div className="panel mb-2" style={{ border: '1px solid var(--color-primary)' }}>
                    <h3 className="mb-1">START A NEW THREAD</h3>
                    <form onSubmit={handlePost} className="flex-col-gap">
                        <input
                            type="text"
                            placeholder="Topic Title"
                            className="form-input"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            required
                        />
                        <textarea
                            rows="4"
                            placeholder="What's on your mind?"
                            className="form-input"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            required
                            style={{ fontFamily: 'sans-serif' }}
                        ></textarea>
                        <button type="submit" className="btn btn-sm">POST THREAD</button>
                    </form>
                </div>
            )}

            <div className="forum-list">
                {threads.map(thread => (
                    <div key={thread.id} className="card mb-1 flex-center-between" style={{ alignItems: 'center' }}>
                        <div>
                            <h3 style={{ margin: 0, color: 'var(--color-secondary)' }}>{thread.title}</h3>
                            <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '0.9rem' }}>
                                Started by <span style={{ color: '#fff' }}>{thread.author}</span> • Last post: {thread.lastPost}
                            </p>
                        </div>
                        <div className="text-center" style={{ minWidth: '100px' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{thread.replies}</div>
                            <div style={{ fontSize: '0.8rem', color: '#999' }}>Replies</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-2">
                <p className="text-muted">You are viewing the latest discussions.</p>
            </div>
        </div>
    );
}
