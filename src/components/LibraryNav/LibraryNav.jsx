import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const tutorials = [
  { title: 'HTML', href: '/html/index.htm' },
  { title: 'CSS', href: '/css/index.htm' },
  { title: 'JavaScript', href: '/javascript/index.htm' },
  { title: 'SQL', href: '/sql/index.htm' },
  { title: 'Python', href: '/python/index.htm' },
  { title: 'Java', href: '/java/index.htm' },
  { title: 'C', href: '/cprogramming/index.htm' },
  { title: 'C++', href: '/cplusplus/index.htm' },
  { title: 'PHP', href: '/php/index.htm' },
  { title: 'Scala', href: '/scala/index.htm' },
  { title: 'C#', href: '/csharp/index.htm' },
  { title: 'Node.js', href: '/nodejs/index.htm' },
  { title: 'MySQL', href: '/mysql/index.htm' },
  { title: 'MongoDB', href: '/mongodb/index.htm' },
  { title: 'PL/SQL', href: '/plsql/index.htm' },
  { title: 'Swift', href: '/swift/index.htm' },
  { title: 'Bootstrap', href: '/bootstrap/index.htm' },
  { title: 'R', href: '/r/index.htm' },
  { title: 'Machine Learning', href: '/machine_learning/index.htm' },
  { title: 'Blockchain', href: '/blockchain/index.htm' },
  { title: 'Angular', href: '/angular4/index.htm' },
  { title: 'React Native', href: '/react_native/index.htm' },
  { title: 'Computer Fundamentals', href: '/computer_fundamentals/index.htm' },
  { title: 'Compiler Design', href: '/compiler_design/index.htm' },
  { title: 'Operating System', href: '/operating_system/index.htm' },
  { title: 'Data Structure and Algorithms', href: '/data_structures_algorithms/index.htm' },
  { title: 'Computer Network', href: '/data_communication_computer_network/index.htm' },
  { title: 'DBMS', href: '/dbms/index.htm' },
  { title: 'Excel', href: '/excel/index.htm' },
];

const LibraryNav = () => {
  const initScroll = (direction) => {
    const slider = document.getElementById('library-nav');
    slider.scrollLeft += direction * 100; // Adjust scrolling speed if needed
  };

  return (
    <nav className="p-4 bg-black">
      <div className="flex items-center">
        <button
          title="Scroll left"
          className="bg-transparent border-none cursor-pointer text-white"
          onMouseDown={() => initScroll(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-grow overflow-x-auto mx-4">
          <ul id="library-nav" className="flex space-x-8 whitespace-nowrap">
            {tutorials.map((tutorial) => (
              <li key={tutorial.title} className="inline-block">
                <a
                  className="text-white hover:bg-green-500 hover:text-black p-2 rounded inline-block"
                  href={tutorial.href}
                  title={`${tutorial.title} Tutorial`}
                >
                  {tutorial.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          title="Scroll right"
          className="bg-transparent border-none cursor-pointer text-white"
          onMouseDown={() => initScroll(1)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </nav>
  );
};

export default LibraryNav;
