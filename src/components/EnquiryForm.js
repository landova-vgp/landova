import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EnquiryForm.css';
import Toast from './Toast';

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_pun2w7f',
      'template_8iqgs6h',
      formData,
      'V_An4ILrEYSuSmfBE'
    )
    .then(
      () => {
        setToast({ message: 'Enquiry sent successfully!', type: 'success' });
        setTimeout(onClose, 2000);
      },
      () => {
        setToast({ message: 'Failed to send. Please try again.', type: 'error' });
      }
    );
  };

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="enquiry-close-btn" onClick={onClose}>×</button>
        <h2 className="enquiry-title">Enquire Now</h2>
        <form onSubmit={handleSubmit} className="enquiry-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="requirement"
            placeholder="Your Requirement *"
            value={formData.requirement}
            onChange={handleChange}
            required
          />
          <div className="enquiry-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default EnquiryForm;
