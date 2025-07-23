import MrFantastic from "../assets/mr-fantastic.jpeg"
import InvisibleWoman from "../assets/sue-storm.jpeg"
import HumanTorch from "../assets/human-torch.jpeg"
import TheThing from "../assets/the-thing.jpeg"

const characters = [
    {
        name: "Mr. Fantastic",
        alias: "Reed Richards",
        power: "Super elasticity, genius intellect",
        color: "bg-blue-700",
        image: MrFantastic,
    },
    {
        name: "Invisible Woman",
        alias: "Sue Storm",
        power: "Invisibility and force fields",
        color: "bg-indigo-600",
        image: InvisibleWoman,
    },
    {
        name: "Human Torch",
        alias: "Johnny Storm",
        power: "Pyrokinesis, flight",
        color: "bg-orange-500",
        image: HumanTorch,
    },
    {
        name: "The Thing",
        alias: "Ben Grimm",
        power: "Superhuman strength, durability",
        color: "bg-yellow-600",
        image: TheThing,
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
                            className="w-full h-150 object-cover rounded-md mb-4 bg-black"
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