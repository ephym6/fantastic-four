export default function Footer() {
    return (
        <footer id="footer" className="bg-ff-dark text-white mt-20 py-6 px-4 text-center bottom-0">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 border-2 border-gray-400 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Fan Made — Tribute to Marvel's Fantastic Four.
                </p>
                <p className="text-xs mt-2 text-gray-400">
                    This project is built by a fan with love and excitement for <span className="text-ff-flame font-semibold">The Fantastic Four: First Steps</span>.
                </p>
                <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-400">
                    <a href="#team" className="hover:text-ff-blue- transition">Team</a>
                    <a href="#extras" className="hover:text-ff-blue transition">Others</a>
                    <a href="#footer" className="hover:text-ff-blue transition">About</a>
                </div>
            </div>
        </footer>
    )
}