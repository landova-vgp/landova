import React, { useState } from 'react';
import './Proximity.css';

const Proximity = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (id) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  const section = (id, title, items) => (
    <details open={openSection === id}>
      <summary onClick={(e) => {
        e.preventDefault(); // prevents the native toggle
        handleClick(id);
      }}>
        {title}
      </summary>
      {items.map(([label, time], index) => (
        <div className="info-row" key={index}>
          <span>{label}</span><span>{time}</span>
        </div>
      ))}
    </details>
  );

  return (
    <div className="project-info-collapsible">
      {section('schools', 'Schools', [
        ['Cee Dee Yes Public School', '13 min'],
        ['Vellore International School (VIS)', '17 min'],
        ['Velammal Vidhyashram Guduvanchery', '20 min']
      ])}

      {section('colleges', 'Colleges', [
        ['SSN College of Engineering, Kalavakkam', '24 min'],
        ['Tagore Medical College & Hospital, Rathinamangalam', '35 min'],
        ['Chettinad Health City, Kelambakkam', '39 min']
      ])}

      {section('hospitals', 'Hospitals', [
        ['Sathya Sai Medical Hospital Dialysis Centre', '7 min'],
        ['Life Line Hospital, Thiruporur', '34 min'],
        ['Tagore Medical College & Hospital, Rathinamangalam', '35 min'],
        ['Chettinad Health City, Kelambakkam', '39 min']
      ])}

      {section('transit', 'Transit', [
        ['GST Road (Mahindra World City)', '20–25 min'],
        ['OMR (Thiruporur Junction)', '15–20 min'],
        ['Thiruporur Bus Stand', '16 min'],
        ['Kilambakkam New Bus Stand', '49 min'],
        ['Chengalpattu Railway Station', '30 min'],
        ['Chennai International Airport', '1 hr 15 min']
      ])}

      {section('entertainment', 'Entertainment', [
        ['VR-Here Entertainment Fun Park', '26 min'],
        ['Peppa Kids Fun World', '29 min'],
        ['The Marina Mall', '45 min'],
        ['Vivira Mall', '45 min'],
        ['Mahabalipuram Beach', '39 min'],
        ['Arignar Anna Zoological Park', '45 min']
      ])}
    </div>
  );
};

export default Proximity;
