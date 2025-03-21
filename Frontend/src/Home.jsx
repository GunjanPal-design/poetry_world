import React from 'react'
import "./Signup.css"
// import about from "./assets/about.jpg"
import poet1 from "./assets/poet1.jpg"
import poet2 from "./assets/poet2.jpg"
import poet3 from "./assets/poet3.jpg"
import poet4 from "./assets/poet4.jpg"
import poet5 from "./assets/poet5.jpg"
import poet6 from "./assets/poet6.jpg"
const Home = () => {
    return (
        <div>
            <header>
                <nav className="mx-auto flex p-6 bg-black">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-pink-600 flex font-bold text-2xl">

                            <a href="#">PoetryWorld</a>
                        </div>

                        <div className="space-x-6 md:flex">
                            <a href="#" className="text-pink-600 ">Home</a>
                            <a href="#" className="text-pink-600 ">About</a>
                            <a href="#" className="text-pink-600 ">Entries</a>
                            <a href="#" className="text-pink-600 ">Category</a>
                            <a href="#" className="text-pink-600 "></a>
                        </div>
                        <div>
                            <button className="rounded-md bg-pink-600 text-white p-3 px-4">Search</button>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Hero Section */}

            <div className="container bg-[url('./assets/back.jpg')] bg-no-repeat bg-cover min-2xl-20 flex items-center justify-start pl-8">
                <div className="w-full max-w-2xl px-4 py-20">
                    <div className="p-8 ">
                        <h2 className="text-3xl font-bold space-y-5">
                            poets.<span className="text-pink-600">org</span>
                        </h2>
                        <p className="mt-3 text-gray-800 text-3xl">
                            Poetry is the one thing you own; it is the bird in your hand
                        </p>
                        <h4 className="mt-3">—Alison Pelegrin, Poet Laureate of Louisiana</h4>
                    </div>
                </div>
            </div>


            {/*About  */}
            <div className="min-h-screen bg-gray-100">

                {/* Header Section */}
                <header className="bg-gradient-to-r from-pink-300 to-pink-600 text-white text-center py-20">
                    <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">About Poetry</h1>
                    <p className="mt-4 text-xl">Dive deep into the world of poetic expression, creativity, and artistry.</p>
                </header>

                {/* Main Content Section */}
                <div className="container mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row gap-12">

                        {/* Left Section (Poet's Image) */}
                        <div className="md:w-1/2 flex justify-center items-center bg-[url('./assets/about.jpg')] bg-no-repeat bg-cover bg-center rounded-lg  overflow-hidden">


                        </div>

                        {/* Right Section (Text Content about Poetry) */}
                        <div className="md:w-1/2 space-y-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-3xl font-semibold mb-4 text-blue-950">Our Mission</h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    We believe in the power of poetry to connect people, inspire creativity, and evoke emotions. Our mission is to celebrate the timeless art of poetry, bringing words to life through rhythm, rhyme, and storytelling.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-3xl font-semibold mb-4 text-blue-950">What We Do</h2>
                                <p className="text-lg text-gray-700 mb-4">
                                    We curate and promote the works of poets from around the world, hosting poetry readings, publishing anthologies, and providing platforms for new voices in poetry. Our goal is to make poetry accessible to all, fostering a deeper appreciation for its beauty and power.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-3xl font-semibold mb-4 text-blue-950">Our Values</h2>
                                <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
                                    <li>Creativity and Expression</li>
                                    <li>Community and Collaboration</li>
                                    <li>Honoring Diversity and Unique Voices</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-3xl font-semibold mb-4 text-blue-950">A Sample Poem</h2>
                                <p className="text-lg text-gray-700 italic">
                                    "The Road Not Taken" by Robert Frost<br />
                                    Two roads diverged in a yellow wood,<br />
                                    And sorry I could not travel both<br />
                                    And be one traveler, long I stood<br />
                                    And looked down one as far as I could<br />
                                    To where it bent in the undergrowth;<br />
                                    ...<br />
                                    [Full poem can be included here]
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




            {/*Poets section */}
            <div className="container mx-auto p-6 ">
                <h2 className="text-center p-5 text-4xl font-extrabold text-gray-800">Famous Poets</h2>

                {/* Poets Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Poet Card 1 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet1}
                                alt="William Shakespeare"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">William Shakespeare</h3>
                            </div>
                        </div>
                    </div>

                    {/* Poet Card 2 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet2}
                                alt="John Keats"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">John Keats</h3>
                            </div>
                        </div>
                    </div>

                    {/* Poet Card 3 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet3}
                                alt="Gulzar"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">Gulzar</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {/* Poet Card 4 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet4}
                                alt="Sarojini Naidu"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">Sarojini Naidu</h3>
                            </div>
                        </div>
                    </div>

                    {/* Poet Card 5 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet5}
                                alt="Rudyard Kipling"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">Rudyard Kipling</h3>
                            </div>
                        </div>
                    </div>

                    {/* Poet Card 6 */}
                    <div className="p-6 rounded-lg shadow-lg bg-linear-to-r from-red-200 via-rose-400 to-pink-600 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={poet6}
                                alt="Rabindranath Tagore"
                                className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-xl font-semibold">Rabindranath Tagore</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-8'>
                <div className='text-center '>
                    <h1 className='text-3xl p-4'>200+</h1>
                    <p>Country Reached</p>
                    <h1 className='text-3xl p-4'>3000+</h1>
                    <p>Project Published</p>
                    <h1 className='text-3xl p-4'>50 Million+</h1>
                    <p>Pages Sold</p>
                    <h1 className='text-3xl p-4'>15000+</h1>
                    <p>Authors Published</p>
                </div>

            </div>


        </div>





    )
}
export default Home
