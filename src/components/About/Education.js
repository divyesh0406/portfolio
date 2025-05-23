import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaMicroscope, FaUsers, FaLaptopCode, FaCode } from 'react-icons/fa';


const experiences = [
    {
    degree: "Master's in Computer Science - Data Science 🎓",
    school: "University of Southern California",
    date: "August 20245 – May 2026",
    description: "",
  },
    {
    degree: "Bachelor's in Computer Engineering - Data Science",
    school: "University of Mumbai",
    date: "August 2021 – May 2024",
    description: "",
  }
];

export default function EducationTimeline() {
  return (
    <div style={{ padding: '60px 20px', position: 'relative' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px', color: 'white' }}>
        Education 
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
              {/* <div style={{ fontSize: '20px', marginBottom: '10px', color: '#a78bfa' }}>
                {exp.icon}
              </div> */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>{exp.degree}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#cccccc' }}>
                {exp.school} | {exp.date}
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
