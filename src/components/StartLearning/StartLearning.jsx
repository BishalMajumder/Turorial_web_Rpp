import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const tutorials = [
  [
    { title: 'HTML', href: 'html/index.htm' },
    { title: 'Javascript', href: 'javascript/index.htm' },
    { title: 'Python', href: 'python/index.htm' },
    { title: 'Java', href: 'java/index.htm' },
    { title: 'SQL', href: 'sql/index.htm' },
    { title: 'Linux', href: 'linux_admin/index.htm' },
    { title: 'C++', href: 'cplusplus/index.htm' },
    { title: 'DSA', href: 'data_structures_algorithms/index.htm' },
  ],
  [
    { title: 'Machine Learning', href: 'machine_learning/index.htm' },
    { title: 'Computer Fundamentals', href: 'computer_fundamentals/index.htm' },
    { title: 'DBMS', href: 'dbms/index.htm' },
    { title: 'Operating System', href: 'basics_of_computer_science/basics_of_computer_science_operating_system.htm' },
    { title: 'Computer Networks', href: 'computer_fundamentals/computer_networking.htm' },
    { title: 'PHP', href: 'php/index.htm' },
    { title: 'CSS', href: 'css/index.htm' },
    { title: 'C', href: 'cprogramming/index.htm' },
  ],
];

const StartLearning = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % tutorials.length);
  };

  const handlePrev = () => {
    setCurrentSection((prevSection) =>
      prevSection === 0 ? tutorials.length - 1 : prevSection - 1
    );
  };

  return (
    <section className="start-learning py-16 px-4 container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Start <span className="text-green-500">Learning</span>
        </h2>
        <a href="/tutorialslibrary.htm" className="button bg-green-500 text-white py-2 px-4 rounded-md">See all</a>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="text-gray-800 p-2">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={handleNext} className="text-gray-800 p-2">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tutorials[currentSection].map((tutorial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md text-center h-40 flex flex-col justify-center">
            <a href={tutorial.href} className="block text-white text-lg font-semibold hover:bg-green-500 transition-colors py-6 px-4 rounded-md">
              Start learning <br /> <span className="text-green-500 hover: text-yellow-100">{tutorial.title}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartLearning;
