const characters = [
    {
        name: "Mr. Fantastic",
        alias: "Reed Richards",
        power: "Super elasticity, genius intellect",
        color: "bg-blue-700",
        image: "https://upload.wikimedia.org/wikipedia/en/3/33/Mr._Fantastic.png",
    },
    {
        name: "Invisible Woman",
        alias: "Sue Storm",
        power: "Invisibility and force fields",
        color: "bg-indigo-600",
        image: "https://upload.wikimedia.org/wikipedia/en/6/60/Susan_Storm_Fantastic_Four.png",
    },
    {
        name: "Human Torch",
        alias: "Johnny Storm",
        power: "Pyrokinesis, flight",
        color: "bg-orange-500",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f8/Human_Torch_%28Johnny_Storm%29.png",
    },
    {
        name: "The Thing",
        alias: "Ben Grimm",
        power: "Superhuman strength, durability",
        color: "bg-yellow-600",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Thing_Fantastic_Four.png",
    },
]

export default function CharacterCards() {
    return (
        <div className="py-10 px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-ff-blue">Meet the Fantastic Four</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {characters.map((char, index) => (
                    <div key={index} className={`rounded-xl p-4 shadow-lg text-white ${char.color}`}>
                        <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-60 object-contain rounded-md mb-4 bg-black"
                        />
                        <h3 className="text-2xl font-semibold">{char.name}</h3>
                        <p className="text-sm italic mb-2">({char.alias})</p>
                        <p className="text-base">{char.power}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}