// Audio Playlist Component

import { useRef, useState } from "react";

const audioList = [
    { name: "Fantastic Four Theme", file: "/fantastic4-theme.mp3" },
    { name: "Dreamer", file: "" },
    { name: "HERBIE's Funk", file: "/herbie-funky.mp3" },
    { name: "Mole Man's Lurking", file: "/mole-man-creep.mp3" },
];

export default function AudioPlaylist() {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(true);

    const togglePlay = () => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    const nextTrack = () => {
        const nextIndex = (currentIndex + 1) % audioList.length;
        setCurrentIndex(nextIndex);
        setPlaying(true);
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    const playSelected = (index) => {
        setCurrentIndex(index);
        setPlaying(true);
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 bg-ff-dark text-white p-4 rounded-lg shadow-lg z-50 w-[260px]">
            <h3 className="text-lg font-bold mb-2 text-ff-blue">🎶 Marvel Playlist</h3>
            <p className="text-sm mb-2">{audioList[currentIndex].name}</p>
            <div className="flex gap-2 mb-3">
                <button
                    onClick={togglePlay}
                    className="bg-ff-blue px-3 py-1 rounded text-sm hover:bg-ff-flame transition"
                >
                    {playing ? "Pause" : "Play"}
                </button>
                <button
                    onClick={nextTrack}
                    className="bg-ff-flame px-3 py-1 rounded text-sm hover:bg-ff-blue transition"
                >
                    Next Theme
                </button>
            </div>

            <ul className="text-xs space-y-1">
                {audioList.map((track, index) => (
                    <li key={track.file}>
                        <button
                            onClick={() => playSelected(index)}
                            className={`hover:text-ff-flame transition ${
                                index === currentIndex ? "font-bold text-ff-flame" : ""
                            }`}
                        >
                            • {track.name}
                        </button>
                    </li>
                ))}
            </ul>

            <audio ref={audioRef} autoPlay loop>
                <source src={audioList[currentIndex].file} type="audio/mpeg" />
                Your browser does not support audio playback.
            </audio>
        </div>
    );
}