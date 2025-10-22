import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';

function Skill({ name, percent }) {
  const [visible, setVisible] = useState(false);
  const barRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <li className="skill-item" ref={barRef}>
      <span className="skillname">{name}</span>
      <div className="box">
        <div
          className="filling"
          style={{
            width: visible ? `${percent}%` : '0%',
            transition: 'width 1.5s ease-in-out'
          }}
        ></div>
      </div>
    </li>
  );
}

export default Skill;
