import {useState } from "react";
import F4Logo from '../assets/images/4-logo-blue.jpeg';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-ff-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <img src={F4Logo} alt="F④" className="w-10"/>
                <div className="hidden md:flex space-x-6 text-lg">
                    <a href="#team" className="hover:text-ff-blue transition">Team</a>
                    <a href="#extras" className="hover:text-ff-blue transition">Others</a>
                    <a href="#about" className="hover:text-ff-blue transition">About</a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-ff-dark px-4 pb-4">
                    <a href="#team" className="block py-2 hover:text-ff-blue">Team</a>
                    <a href="#extras" className="block py-2 hover:text-ff-blue">Others</a>
                    <a href="#about" className="block py-2 hover:text-ff-blue">About</a>
                </div>
            )}
        </nav>
    )
}