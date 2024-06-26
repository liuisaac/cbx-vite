import React, { useState } from "react";
import { people } from "./teamIndex";
import arrow from "./arrow.svg";
import { useNavigate } from "react-router-dom";

const Roster = ({ aspect, setAspect }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const nav = useNavigate();

    function filter(profile) {
        if (aspect === "all") {
            return true;
        }
        return profile.teams.includes(aspect.toLowerCase());
    }

    function namesearch(profile) {
        return profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    function profileClick(person) {
        window.location.href = person.redirect;
    }

    return (
        <section className={`bg-gray-100 w-3/4 flex flex-col justify-start items-center text-black text-4xl absolute`}>
            <div className="mt-24 w-full ml-4 mr-4">
                <input
                    type="text"
                    className="border p-2 text-black w-full "
                    placeholder="Search by name"
                    value={searchTerm}
                    //onInput={e=>{handleInput(e.target.value)}}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div
                    className={`mb-4 text-sm flex flex-row w-full gap-3 ${
                        aspect.toLowerCase() == "advisors" ||
                        aspect.toLowerCase() == "advisory-board" ||
                        aspect.toLowerCase() == "tech-board"
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <button
                        className="h-8 text-black border-black border-2 px-2 
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                        onClick={() => {
                            setAspect("advisory-board");
                        }}
                    >
                        ADVISORY BOARD
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2 
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                        onClick={() => {
                            setAspect("tech-board");
                        }}
                    >
                        TECHNICAL ADVISORY BOARD
                    </button>
                </div>
            </div>

            <div className="w-full ml-16">
                <div
                    className={`mb-4 text-sm flex flex-row w-full gap-3 ${
                        aspect.toLowerCase() == "operations" ||
                        aspect.toLowerCase() == "communications" ||
                        aspect.toLowerCase() == "legal" ||
                        aspect.toLowerCase() == "portfolio" ||
                        aspect.toLowerCase() == "investor" ||
                        aspect.toLowerCase() == "director" ||
                        aspect.toLowerCase() == "capital-formation" ||
                        aspect.toLowerCase() == "portfolio-growth" ||
                        aspect.toLowerCase() == "comms-engineering" ||
                        aspect.toLowerCase() == "quant-strategies" ||
                        aspect.toLowerCase() == "talent-search" ||
                        aspect.toLowerCase() == "compliance" ||
                        aspect.toLowerCase() == "advisor" 
                            ? "visible"
                            : "hidden"
                    }`}
                    
                >
                    <button
                        className="h-8 text-black border-black border-2 px-2
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                        
                        onClick={() => {
                            setAspect("capital-formation");
                        }}
                        style={{ height: "45px" }} // Adjust height as needed
                    >
                        CAPITAL FORMATION
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                            style={{ height: "45px" }} // Adjust height as needed
                        onClick={() => {
                            setAspect("portfolio-growth");
                        }}
                    >
                        DILIGENCE & GROWTH
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2 
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                            style={{ height: "45px" }} // Adjust height as needed
                        onClick={() => {
                            setAspect("comms-engineering");
                        }}
                    >
                        COMMS & ENGINEERING
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                            style={{ height: "45px" }} // Adjust height as needed
                        onClick={() => {
                            setAspect("quant-strategies");
                        }}
                    >
                        QUANTITATIVE STRATEGIES
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                            style={{ height: "45px" }} // Adjust height as needed
                        onClick={() => {
                            setAspect("talent-search");
                        }}
                    >
                        TALENT SEARCH
                    </button>
                    <button
                        className="h-8 text-black border-black border-2 px-2 
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                            style={{ height: "45px" }} // Adjust height as needed
                        onClick={() => {
                            setAspect("compliance");
                        }}
                    >
                        COMPLIANCE
                    </button>
                </div>
            </div>

            <div className="w-full ml-16">
                <div
                    className={`mb-4 text-sm flex flex-row w-full gap-3 ${
                        aspect.toLowerCase() == "investment" ||
                        aspect.toLowerCase() == "analyst" ||
                        aspect.toLowerCase() == "associate" ||
                        aspect.toLowerCase() == "principal" ||
                        aspect.toLowerCase() == "managing-director"
                            ? "visible"
                            : "hidden"
                    }`}
                >
                    <button
                        className="h-8 text-black border-black border-2 px-2 
                            tracking-wide font-semibold hover:border-transparent hover:bg-black
                            hover:text-white transition duration-500 ease-in-out"
                        onClick={() => {
                            setAspect("investment");
                        }}
                    >
                        INVESTOR
                    </button>
                </div>
            </div>


            {/* Profiles */}
            <div className="w-full h-full grid grid-cols-4 overflow-hidden px-4">
                {people.map((tab) => (
                    <div
                        key={tab.name}
                        className={`${
                            filter(tab) && namesearch(tab)
                                ? "visible"
                                : "hidden"
                        } m-4 rounded-md overflow-hidden hover:cursor-pointer group`}
                        onClick={() => {
                            profileClick(tab);
                        }}
                    >
                        <div className="rounded-lg bg-white w-full">
                            <img
                                src={tab.profile}
                                className="brightness-100 contrast-100 scale-100"
                            />
                        </div>
                        <div className="flex flex-col text-left mt-4">
                            <span className="text-2xl font-semibold group-hover:underline">
                                {tab.name}
                            </span>
                            <span className="text-xl">{tab.title}</span>
                            <span className="text-xl">{tab.subtitle}</span>
                        </div>
                        <div className="w-full flex flex-row justify-end items-center -mt-6 mb-4">
                            <img
                                src={arrow}
                                className="h-4 left-0 group-hover:visible invisible"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roster;
