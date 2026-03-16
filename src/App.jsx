import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Merch from './pages/Merch';
import Advice from './pages/Advice';
import Trivia from './pages/Trivia';
import News from './pages/News';
import About from './pages/About';
import Forum from './pages/Forum';


function App() {
    // Scroll Reveal Logic
    const handleScroll = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    };

    // Attach listener
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);

    return (
        <Router>
            <div className="app-wrapper">
                <StarBackground />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/podcast" element={<Podcast />} />
                        <Route path="/merch" element={<Merch />} />
                        <Route path="/advice" element={<Advice />} />
                        <Route path="/trivia" element={<Trivia />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/forum" element={<Forum />} />
                    </Routes>
                </main>
                <Footer />
                <AudioPlayer />
            </div>
        </Router>
    );
}

export default App;
