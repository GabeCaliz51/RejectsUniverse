import { useState } from 'react';

export default function Advice() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container section-padding">
            <h1>DEAR REJECTS</h1>
            <p className="lead">Got a problem? We'll solve it. Probably incorrectly, but it'll be funny.</p>

            <div className="grid-2-col mt-2">

                {/* Previous Advice Column */}
                <div className="panel">
                    <h2>FROM THE ARCHIVES</h2>
                    <div className="mb-2">
                        <h4 className="text-primary">Q: "My neighbor complains about my loud music." - Karen, 45</h4>
                        <p><strong>Rejects Answer:</strong> Buy bigger speakers. Assert dominance. If she calls the cops, ask them to request a song. - love, The Rejects</p>
                    </div>
                </div>

                {/* Submission Form */}
                <div>
                    <h2>ASK FOR ADVICE</h2>
                    {submitted ? (
                        <div className="card text-center p-2">
                            <h3 className="text-secondary">RECEIVED!</h3>
                            <p>If your question isn't boring, we might answer it on the podcast.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex-col-gap">
                            <input type="text" placeholder="Your Name (or Fake Name)" required
                                className="form-input" />
                            <input type="email" placeholder="Email" required
                                className="form-input" />
                            <textarea rows="5" placeholder="What's your problem?" required
                                className="form-input" style={{ fontFamily: 'sans-serif' }}></textarea>
                            <button type="submit" className="btn">SUBMIT TO THE VOID</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
