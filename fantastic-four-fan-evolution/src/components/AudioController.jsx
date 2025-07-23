import { useRef, useState } from "react";

function AudioController() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleAudio}
                className="bg-ff-blue text-white px-4 py-2 rounded shadow hover:bg-ff-flame transition"
            >
                {playing ? "Pause Theme" : "Play Theme"}
            </button>
            <audio ref={audioRef} src="/The%20Fantastic%20Four_%20First%20Steps%20%20Dreamer%20%20In%20Theaters%20Friday.mp3" autoPlay loop />
        </div>
    );
}

export default AudioController;
