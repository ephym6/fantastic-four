import {useEffect, useState} from 'react'

import MrFantastic from "../assets/images//mr-fantastic.jpeg"
import InvisibleWoman from "../assets/images/sue-storm.jpeg"
import HumanTorch from "../assets/images/human-torch.jpeg"
import TheThing from "../assets/images/the-thing.jpeg"
import Herbie from "../assets/images/herbie.jpeg"
import Franklin from "../assets/images/franklin-richards.jpeg"
import Galactus from "../assets/images/galactus-1.jpeg"
import MoleMan from "../assets/images/mole-man.jpeg"

const characters = [
    {
        name: "Mr. Fantastic",
        alias: "Reed Richards",
        power: "Super elasticity, genius intellect",
        bio: "A brilliant scientist and leader of the Fantastic Four, Reed can stretch his body into any shape imaginable.",
        color: "bg-blue-700",
        image: MrFantastic,
        quote: "Let's solve this with science.",
        powerLevels: {
            Strength: 4,
            Durability: 5,
            Intelligence: 10,
            Speed: 5,
            Special: 8  // Elastic body + high problem-solving skills
        },
    },
    {
        name: "Invisible Woman",
        alias: "Sue Storm",
        power: "Invisibility and force fields",
        bio: "Sue can render herself invisible and generate powerful force fields. She's both powerful and compassionate.",
        color: "bg-indigo-600",
        image: InvisibleWoman,
        quote: "You won’t see me coming.",
        powerLevels: {
            Strength: 3,
            Durability: 7,
            Intelligence: 7,
            Speed: 5,
            Special: 10  // Force fields, invisibility
        },
    },
    {
        name: "Human Torch",
        alias: "Johnny Storm",
        power: "Pyrokinesis, flight",
        bio: "Johnny can engulf his body in flames, fly, and hurl fireballs. He's the team's fiery daredevil.",
        color: "bg-orange-500",
        image: HumanTorch,
        quote: "Flame on!",
        powerLevels: {
            Strength: 5,
            Durability: 6,
            Intelligence: 4,
            Speed: 7,
            Special: 9  // Flight, fireballs, nova flame
        },
    },
    {
        name: "The Thing",
        alias: "Ben Grimm",
        power: "Superhuman strength, durability",
        bio: "Ben's rocky appearance hides his heart of gold. He's immensely strong and the team's brawler.",
        color: "bg-yellow-600",
        image: TheThing,
        quote: "It's clobberin’ time!",
        powerLevels: {
            Strength: 10,
            Durability: 9,
            Intelligence: 4,
            Speed: 3,
            Special: 6  // Resistance, rock body
        },
    },
]

const extendedCharacters = [
    {
        name: "HERBIE",
        alias: "Highly Engineered Robot Built for Interdimensional Exploration",
        power: "AI intelligence, flight, utilities",
        bio: "A loyal robotic assistant to the Fantastic Four, HERBIE offers tactical analysis and support.",
        color: "bg-gray-500",
        image: Herbie,
        quote: "/audio/herbie.mp3",
        powerLevels: { Strength: 2, Durability: 5, Intelligence: 9, Speed: 6, Special: 7 }
    },
    {
        name: "Franklin Richards",
        alias: "Reality Warper",
        power: "Omniversal manipulation",
        bio: "Son of Reed and Sue, Franklin is one of the most powerful mutants, capable of creating universes.",
        color: "bg-cyan-700",
        image: Franklin,
        quote: "/audio/franklin.mp3",
        powerLevels: { Strength: 7, Durability: 8, Intelligence: 8, Speed: 7, Special: 10 }
    },
    {
        name: "Galactus",
        alias: "The Devourer of Worlds",
        power: "Cosmic energy absorption",
        bio: "A cosmic being who consumes planets to sustain his existence. A force of nature.",
        color: "bg-purple-900",
        image: Galactus,
        quote: "/audio/galactus.mp3",
        powerLevels: { Strength: 10, Durability: 10, Intelligence: 9, Speed: 9, Special: 10 }
    },
    {
        name: "Mole Man",
        alias: "Harvey Elder",
        power: "Underground dominion, control of monsters",
        bio: "A misunderstood genius who rules the Subterraneans. Often at odds with the Fantastic Four.",
        color: "bg-green-900",
        image: MoleMan,
        quote: "/audio/moleman.mp3",
        powerLevels: { Strength: 4, Durability: 4, Intelligence: 6, Speed: 3, Special: 6 }
    }
];

export default function CharacterCards() {
    const [selectedChar, setSelectedChar] = useState(null)

    // Autoplay voice player when modal opens
    useEffect(() => {
        if (selectedChar) {
            const audio = new Audio(selectedChar.quote)
            audio.play()
        }
    }, [selectedChar])

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

            <h2 className="text-4xl font-bold mb-8 text-ff-blue mt-6">Other Characters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {extendedCharacters.map((char, index) => (
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
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto py-10 px-4 flex justify-center items-start">
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
                        <audio controls className="mb-4 w-full">
                            <source src={selectedChar.quote} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        {/* Power Level Meters */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2 text-ff-blue">Power Levels</h3>
                            {Object.entries(selectedChar.powerLevels).map(([trait, value], i) => (
                                <div key={i} className="mb-2 text-left"
                                     style={{ width: `${value * 10}%`,
                                         transitionDelay: `${i * 100}ms`,
                                     }}>
                                    <label className="capitalize">{trait}</label>
                                    <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                                        <div
                                            className="bg-ff-flame h-full rounded-full transition-all duration-700 ease-out"
                                            style={{ width: `${value * 10}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-ff-flame font-semibold">Power: {selectedChar.power}</p>
                    </div>
                </div>
            )}
        </div>
    )
}