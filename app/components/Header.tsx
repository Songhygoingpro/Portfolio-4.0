"use client";


export default function Header() {

    return (
        <header className="flex justify-between items-center p-5 bg-foreground border border-black m-5">
            <h1 className="text-2xl md:text-3xl">Ham Songhy</h1>
            <nav>
                <ul className="flex gap-4 font-medium text-sm">
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <button className="bg-primary font-bold text-sm text-center px-8 py-2 border border-black">Resume</button>
        </header>
    );
}
