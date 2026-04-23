import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [error, setError] = useState(false);

    // Handle volume changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Initial autoplay attempt
    useEffect(() => {
        const timer = setTimeout(() => {
            audioRef.current?.play()?.catch(() => {
                console.log("Auto-play blocked by browser. User interaction required.");
                setIsPlaying(false);
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Setup audio event listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleError = () => setError(true);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('error', handleError);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    if (error) {
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
                color: '#ff6b6b',
                fontSize: '0.9rem'
            }}>
                Audio failed to load
            </div>
        );
    }

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
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
                aria-pressed={isPlaying}
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
                aria-label="Volume control"
                style={{ width: '80px', accentColor: 'var(--color-primary)' }}
            />
        </div>
    );
}