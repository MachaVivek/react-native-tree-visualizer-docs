import { useState } from "react";
import {
  FiCpu,
  FiLayout,
  FiDroplet,
  FiGitMerge,
  FiSmartphone,
  FiSettings,
  FiCopy, FiCheck,
  FiLayers
} from "react-icons/fi";

import Card from "./Card";

// Import images
import web1 from "../assets/webImages/circle-web.png";
import web2 from "../assets/webImages/web-square.png";
import web3 from "../assets/webImages/web-large.png";
import web4 from "../assets/webImages/web-landscape.png";
import web5 from "../assets/webImages/web-view.png";
import web6 from "../assets/webImages/web-add-node.png";
import web7 from "../assets/webImages/web-edit-node.png";
import web8 from "../assets/webImages/curved-web.png";

import mobile1 from "../assets/mobileImages/android-landscape.png";
import mobile2 from "../assets/mobileImages/ios-vertical-square.png";
import mobile3 from "../assets/mobileImages/ios-landscape-circle.png";
import SampleCode from "./SampleCode";
import AuthorCard from "./AuthorCard";

// Copyable command component
const CopyableCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-gray-900 text-gray-200 p-4 rounded mb-6 overflow-x-auto flex items-center justify-between">
      <code className="select-all">{command}</code>
      <button
        onClick={handleCopy}
        className="ml-4 p-2 rounded hover:bg-gray-800 transition"
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
      </button>
    </div>
  );
};

const DeveloperPage = () => {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    "Macha Vivek"
  )}&size=100&background=808080&color=ffffff`;
  const webCards = [
    {
      image: web1,
      heading: "Circle Layout",
      description: "Visualize tree structures in a circular layout.",
    },
    {
      image: web2,
      heading: "Square Nodes",
      description: "Square-shaped nodes for clear hierarchical views.",
    },
    {
      image: web3,
      heading: "Hexagon Nodes",
      description: "Hexagon shaped nodes",
    },
    {
      image: web4,
      heading: "Landscape Mode",
      description: "Supports landscape orientation for wide screens.",
    },
    {
      image: web8,
      heading: "Curved paths",
      description: "Connecting lines between the nodes are curved.",
    },
    {
      image: web5,
      heading: "View Node",
      description: "View details of a paticular node.",
    },
    {
      image: web6,
      heading: "Add Node",
      description: "Easily add nodes interactively on the tree.",
    },
    {
      image: web7,
      heading: "Edit Node",
      description: "Edit node data and see updates in real time.",
    },

  ];

  const mobileCards = [
    {
      image: mobile1,
      heading: "Android Layout",
      description: "Optimized for Android devices in landscape mode.",
    },
    {
      image: mobile2,
      heading: "iOS Portrait Layout",
      description: "Vertical layout optimized for iPhone screens.",
    },
    {
      image: mobile3,
      heading: "iOS Landscape Circle",
      description: "Circular node layout for iOS landscape orientation.",
    },
  ];

  const features = [
    {
      title: "Nodes Data",
      description: "Each node can contain any number of fields of any type or structure, fully customizable by developers.",
      icon: FiLayers,
    },
    {
      title: "Interactive Nodes",
      description: "Nodes and their children can be expanded and collapsed when clicked.",
      icon: FiCpu, // represents interactivity / logic
    },
    {
      title: "Multiple Layouts",
      description: "Supports circle, square, and hexagon node layouts with portrait and landscape modes.",
      icon: FiLayout, // represents layout/structure
    },
    {
      title: "Customizable Colors",
      description: "Fully customizable colors for nodes, paths, and background.",
      icon: FiDroplet, // represents color
    },
    {
      title: "Curved Connections",
      description: "Enable curved edges for better visual hierarchy.",
      icon: FiGitMerge, // represents connections/branches
    },
    {
      title: "Control Buttons",
      description: "Add, edit, view, or remove nodes with built-in control buttons.",
      icon: FiSettings, // represents control/settings
    },
  ];



  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans px-10 py-10">

      <header className="flex items-center justify-between px-8 py-5 bg-neutral-950 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-gray-100 tracking-tight">
          react-native-tree-visualizer
        </h1>

        <a
          href="https://www.npmjs.com/package/react-native-tree-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="
      px-4 py-1.5 text-xs font-semibold rounded-md
      bg-red-600/90 text-white
      hover:bg-red-500
      shadow-md shadow-red-600/30
      transition
    "
        >
          View on npm
        </a>
      </header>



      <main className="w-full px-16 py-16">

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Installation
          </h2>
          <CopyableCommand command="npm install react-native-tree-visualizer" />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                <div className="mb-4">
                  <feature.icon size={32} className="border-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Web Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {webCards.map((card, idx) => (
              <Card
                key={idx}
                image={card.image}
                heading={card.heading}
                description={card.description}
                className="w-full"
                imageClassName="h-64 lg:h-100"
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Mobile Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileCards.map((card, idx) => (
              <Card
                key={idx}
                image={card.image}
                heading={card.heading}
                description={card.description}
                className="w-full"
                imageClassName="h-80 md:h-96 lg:h-300"
              />
            ))}
          </div>
        </section>

        <SampleCode />

      </main>

      <AuthorCard
        name="Vivek Macha"
        role="Software Engineer"
        email="machavivek2003@gmail.com"
        linkedin="https://www.linkedin.com/in/macha-vivek-66a474276"
        github="https://github.com/MachaVivek"
        leetcode="https://leetcode.com/u/machavivek19/"
        experience={[
          { company: "Eksaq", role: "Associate Software Engineer", duration: "2024 - Present" },
        ]}
        education={[
          { degree: "B.Tech CSE", institute: "Keshav Memorial Institute of Technology", percentage: "9.5 CGPA" },
        ]}
        skills={[
          // Programming Languages
          "Java", "Python", "C++", "TypeScript", "JavaScript",
          // Web Development
          "Node.js", "Express.js", "React.js", "React Native", "Tailwind CSS",
          // Database
          "MySQL", "MongoDB", "Firebase",
          // Blockchain
          "Solidity", "Hardhat", "OpenZeppelin", "MetaMask", "NFTs",
          // AI & Data Science
          "Machine Learning", "Deep Learning", "TensorFlow", "Keras",
          // Computer Concepts
          "Operating Systems", "Computer Networks",
          // DevOps Tools
          "Docker", "Git",
        ]}
        achievements={[
          "Knight ranking in LeetCode",
          "Secured 3rd rank in college academics",
        ]}
        avatar={avatarUrl}
      />



      <footer className="mt-6 py-6 text-center text-sm text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} react-native-tree-visualizer — Built with ❤️ for developers
      </footer>
    </div>
  );
};

export default DeveloperPage;
