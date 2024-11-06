import React, { useEffect, useState } from 'react';

import { useLanguage } from '../context/LanguageContext';
import en_data from '../locales/en.json';
import tr_data from '../locales/tr.json';

export default function Projects() {
  const { t, language } = useLanguage();
  useEffect(() => {
    setProjects(
      language === 'en' ? tr_data.projectsData : en_data.projectsData
    );
  }, [language]);

  const [projects, setProjects] = useState(tr_data.projectsData);
  return (
    <section id="projects" className="container p-4 ">
      <hr className="border-t border-custom-purple mt-4" />
      <h2 className="text-6xl font-semibold dark:text-custom-gray mb-12 mt-8">
        {t('projects')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {' '}
        {/* gap ile oynayınca kartların boyutu değişiyor neden? */}
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-custom-indigo-midlight mb-4 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-white min-h-56">
                {project.description}
              </p>
              <div className="flex space-x-2 mt-2">
                {project.technologies.map(
                  (
                    tech,
                    index //ilerde min-h-56 kısımı patlatabilir
                  ) => (
                    <span
                      key={index}
                      className="border rounded border-custom-blue text-indigo-700 dark:border-custom-indigo-mid dark:text-custom-indigo-mid px-2 py-1 text-xs mb-2"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between mt-4 ">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-indigo-700 dark:text-custom-indigo-lightest underline"
                >
                  GitHub
                </a>
                <a
                  href={project.siteLink}
                  target="_blank"
                  className="text-indigo-700 dark:text-custom-indigo-lightest underline"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
