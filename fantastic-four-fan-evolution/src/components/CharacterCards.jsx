import {useState } from 'react'

import MrFantastic from "../assets/mr-fantastic.jpeg"
import InvisibleWoman from "../assets/sue-storm.jpeg"
import HumanTorch from "../assets/human-torch.jpeg"
import TheThing from "../assets/the-thing.jpeg"

const characters = [
    {
        name: "Mr. Fantastic",
        alias: "Reed Richards",
        power: "Super elasticity, genius intellect",
        bio: "A brilliant scientist and leader of the Fantastic Four, Reed can stretch his body into any shape imaginable.",
        color: "bg-blue-700",
        image: MrFantastic,
    },
    {
        name: "Invisible Woman",
        alias: "Sue Storm",
        power: "Invisibility and force fields",
        bio: "Sue can render herself invisible and generate powerful force fields. She's both powerful and compassionate.",
        color: "bg-indigo-600",
        image: InvisibleWoman,
    },
    {
        name: "Human Torch",
        alias: "Johnny Storm",
        power: "Pyrokinesis, flight",
        bio: "Johnny can engulf his body in flames, fly, and hurl fireballs. He's the team's fiery daredevil.",
        color: "bg-orange-500",
        image: HumanTorch,
    },
    {
        name: "The Thing",
        alias: "Ben Grimm",
        power: "Superhuman strength, durability",
        bio: "Ben's rocky appearance hides his heart of gold. He's immensely strong and the team's brawler.",
        color: "bg-yellow-600",
        image: TheThing,
    },
]

export default function CharacterCards() {
    const [selectedChar, setSelectedChar] = useState(null)

    return (
        <div className="py-10 px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-ff-blue">Meet the Fantastic Four</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {characters.map((char, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedChar(char)}
                        className={`rounded-xl p-4 shadow-lg text-white cursor-pointer hover:scale-105 transition-transform duration-300 
                        ${char.color}`}>
                        <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-150 object-cover rounded-md mb-4 bg-black"
                        />
                        <h3 className="text-2xl font-semibold">{char.name}</h3>
                        <p className="text-sm italic mb-2">({char.alias})</p>
                        <p className="text-base transition-all duration-300 ease-in-out hover:scale-105 hover:text-ff-flame">
                            {char.power}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedChar && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-ff-dark text-white p-6 rounded-xl shadow-2xl max-w-md w-[90%] relative">
                        <button
                            onClick={() => setSelectedChar(null)}
                            className="absolute top-2 right-3 text-2xl font-bold text-ff-flame hover:text-red-500"
                        >
                            ×
                        </button>
                        <img
                            src={selectedChar.image}
                            alt={selectedChar.name}
                            className="w-full h-60 object-contain bg-black rounded-md mb-4"
                        />
                        <h2 className="text-3xl font-bold mb-2">{selectedChar.name}</h2>
                        <p className="text-lg italic text-gray-300 mb-1">({selectedChar.alias})</p>
                        <p className="mb-4">{selectedChar.bio}</p>
                        <p className="text-ff-flame font-semibold">Power: {selectedChar.power}</p>
                    </div>
                </div>
            )}
        </div>
    )
}