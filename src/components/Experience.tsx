import React from 'react';

interface ExperienceProps {
  period: string;
  company: string;
  role: string;
  description: string;
  active: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      period: 'July 2024-Aug 2024',
      company: 'ANUDIP FOUNDATION ',
      role: 'Data Analyst Visualization Intern ',
      description:
        ' Boosted data-driven decision-making by developing scalable dashboards in Power BI and optimizing metrics visualization by 25%. Utilized Python, SQL, and Excel for insights generation, achieving a 30% improvement in KPI analysis. Designed and executed automated data processing workflows, increasing productivity by 40%. ',
      active: false,
    },
    {
      period: 'Feb 2025 - Present ',
      company: 'U4RAD Technologies pvt',
      role: 'Software Development Intern ',
      description:
       ' Working on full-stack development using Django and React, contributing to the design and implementation of scalable web applications by developing RESTful APIs with Django, building responsive user interfaces with React, collaborating with cross-functional teams to improve performance and user experience, writing clean and maintainable code, participating in debugging, testing, and deployment, and continuously enhancing my skills in web development, API integration, and software engineering through innovative projects.',
      active: false,
    },
    
  ];

  return (
    <section id="experience" className="w-full px-4 py-12 bg-[#FEB3C7]">
      <h2 className="text-4xl font-bold text-black mb-8 text-left mx-auto max-w-4xl">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-200 via-lavender-200 to-pink-200" />

        {/* Experience cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline dot */}
              <div
                className={`absolute left-[-4px] top-6 w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  exp.active
                    ? 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                    : 'bg-transparent group-hover:bg-red-600 group-hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]'
                }`}
              />
              <div
                className={`absolute left-[-3px] top-8 bottom-0 w-px bg-gradient-to-b from-lavender-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              />
              <div
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ${
                  exp.active
                    ? 'shadow-[0_0_20px_rgba(236,72,153,0.15)] scale-[1.02]'
                    : 'hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] hover:scale-[1.01] group-hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]'
                }`}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-sm mb-4 text-black">
                  {exp.period}
                </div>
                <h3 className="font-semibold mb-2 text-black">{exp.company}</h3>
                <h4 className="text-sm font-medium text-gray-700 mb-2">{exp.role}</h4>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
