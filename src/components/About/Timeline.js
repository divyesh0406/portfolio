import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaMicroscope, FaUsers, FaLaptopCode, FaCode } from 'react-icons/fa';


const experiences = [
    {
    title: "Data Science Intern",
    company: "ServiceLink",
    date: "June 2025 – August 2025",
    icon: <FaLaptopCode />,
    description: "Built an end-to-end document analysis system by fine-tuning and quantizing a multimodal LLM, achieving 38% accuracy improvement and 70% model size reduction, then deploying it across mobile platforms via React Native for real-time, on-device inference.",
  },
    {
    title: "Research Assistant",
    company: "USC Ming Hsieh Dept. of ECE",
    date: "Dec 2024 – May 2025",
    icon: <FaMicroscope />,
    description: "Optimized a COVID-19 simulation model using Cython and parallelism, improving speed by 25%.",
  },
  {
    title: "Research Assistant",
    company: "USC Keck School of Medicine",
    date: "Sep 2024 – Dec 2024",
    icon: <FaMicroscope />,
    description: "Aligned DNA sequences and annotated mutations using Sniffles2 and protein mapping.",
  },
  {
    title: "Data Analyst Intern",
    company: "OziBook",
    date: "Aug 2023 – Oct 2023",
    icon: <FaUsers />,
    description: "Led a team of 30 interns and created PowerBI dashboards to analyze client leads.",
  },
  {
    title: "Data Science Intern",
    company: "CodeClause",
    date: "Apr 2023 – May 2023",
    icon: <FaLaptopCode />,
    description: "Built sentiment analysis and disease detection models using NLP and ML tools.",
  },
  {
    title: "Webmaster",
    company: "Code-X, SFIT",
    date: "Aug 2022 – Jul 2023",
    icon: <FaCode />,
    description: "Rebuilt the club website with React and Firebase, reducing load time and security issues.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div style={{ padding: '60px 20px', position: 'relative' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px', color: 'white' }}>
        Experience 
      </h2>

      {/* Vertical line (starts below heading) */}
      <div
        style={{
          position: 'absolute',
          top: '100px', // shifted below heading
          left: '50%',
          width: '2px',
          height: 'calc(100% - 100px)',
          background: '#6c63ff',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      />

      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: isLeft ? 'row' : 'row-reverse',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '50px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Transparent Card */}
            <div
              style={{
                width: '45%',
                padding: '20px',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255, 255, 255, 0.05)', // subtle transparent
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '10px', color: '#a78bfa' }}>
                {exp.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>{exp.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#cccccc' }}>
                {exp.company} | {exp.date}
              </p>
              <p>{exp.description}</p>
            </div>

            {/* Timeline Dot */}
            <div
              style={{
                width: '16px',
                height: '16px',
                background: '#6c63ff',
                borderRadius: '50%',
                border: '4px solid #1a1a1a', // matches dark bg
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
