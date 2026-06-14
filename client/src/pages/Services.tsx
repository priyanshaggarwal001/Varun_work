import React from 'react';
import { Shield, Users, FileText, Briefcase, BarChart, Heart } from 'lucide-react';
import '../styles/services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'HR Compliance',
      description: 'Navigate the complex landscape of federal and state labor laws including FLSA, FMLA, and ADA.',
      icon: <Shield size={40} />
    },
    {
      title: 'Talent Acquisition',
      description: 'End-to-end recruitment strategies to find, vet, and hire the best talent for your culture.',
      icon: <Users size={40} />
    },
    {
      title: 'Payroll Management',
      description: 'Accurate and timely payroll processing with full tax compliance and reporting.',
      icon: <FileText size={40} />
    },
    {
      title: 'Employee Relations',
      description: 'Foster a positive workplace culture through effective conflict resolution and engagement programs.',
      icon: <Heart size={40} />
    },
    {
      title: 'Benefits Administration',
      description: 'Competitive benefits packages designed to attract top talent while managing costs.',
      icon: <Briefcase size={40} />
    },
    {
      title: 'Performance Management',
      description: 'Data-driven performance review systems that align individual goals with company objectives.',
      icon: <BarChart size={40} />
    }
  ];

  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive HR solutions designed to power your business growth.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
