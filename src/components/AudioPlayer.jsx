import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        // Attempt auto-play on mount
        if (audioRef.current) {
            audioRef.current.volume = volume;
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Auto-play blocked by browser. User interaction required.");
                    setIsPlaying(false);
                });
            }
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e) => {
        const newVol = parseFloat(e.target.value);
        setVolume(newVol);
        audioRef.current.volume = newVol;
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(0,0,0,0.8)',
            border: '1px solid var(--color-primary)',
            padding: '10px 15px',
            borderRadius: '50px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            boxShadow: '0 0 15px rgba(255,0,255,0.4)',
            backdropFilter: 'blur(5px)'
        }}>
            <audio ref={audioRef} src="/assets/no_crying_on_the_wall.mp3" loop />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>NOW PLAYING</span>
                <span style={{ fontSize: '0.9rem', color: '#fff' }}>No Crying On The Wall</span>
            </div>

            <button
                onClick={togglePlay}
                style={{
                    background: 'var(--color-primary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}
            >
                {isPlaying ? "❚❚" : "▶"}
            </button>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{ width: '80px', accentColor: 'var(--color-primary)' }}
            />
        </div>
    );
}
