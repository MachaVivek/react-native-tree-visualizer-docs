import React from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

interface AuthorProps {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  experience: { company: string; role: string; duration?: string }[];
  education: { degree: string; institute: string; percentage: string }[];
  skills: string[];
  achievements: string[];
  avatar?: string;
}

const AuthorCard: React.FC<AuthorProps> = ({
  name,
  role,
  email,
  linkedin,
  github,
  leetcode,
  experience,
  education,
  skills,
  achievements,
  avatar,
}) => {
    
    

  return (
    <section className="max-w-4xl mx-auto p-8 bg-neutral-900 rounded-2xl shadow-lg text-gray-200 mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src={avatar || ""}
            alt={name}
            className="w-32 h-32 rounded-full border-2 border-gray-700 object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-100">{name}</h2>
            <p className="text-gray-400">{role}</p>
          </div>

          <div className="flex items-center gap-4 text-gray-200">
            <a href={`mailto:${email}`} target="_blank" className="hover:text-blue-400 transition">
              <FiMail size={24} />
            </a>
            <a href={linkedin} target="_blank" className="hover:text-blue-500 transition">
              <FiLinkedin size={24} />
            </a>
            <a href={github} target="_blank" className="hover:text-gray-100 transition">
              <FiGithub size={24} />
            </a>
            <a href={leetcode} target="_blank" className="hover:text-orange-400 transition">
              <SiLeetcode size={24} />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-1">Experience</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {experience.map((exp, idx) => (
                <li key={idx}>
                  <span className="font-medium">{exp.role}</span> @ {exp.company} {exp.duration && `(${exp.duration})`}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-1">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {education.map((edu, idx) => (
                <li key={idx}>
                  {edu.degree} — {edu.institute} ({edu.percentage})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-1">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100 mb-1">Achievements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
