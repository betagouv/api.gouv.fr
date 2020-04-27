import React from 'react';

const explanations = [
  {
    title:
      '<span>1.</span> Trouvez <a href="/apropos#apis">l’API</a> dont vous avez besoin',
    src: '/images/home/1.png',
  },
  {
    title:
      '<span>2.</span>  Obtenez l’<a href="/apropos#access">accès</a> à l’API',
    src: '/images/home/2.png',
  },
  {
    title:
      '<span>3.</span>  Construisez votre <a href="/apropos#service">service !</a>',
    src: '/images/home/3.png',
  },
];

const ExplanationSection = () => (
  <div id="explanation-section">
    <div className="content-container">
      <h2>Comment ca marche&nbsp;?</h2>
      <div>
        {explanations.map(explanation => (
          <div key={explanation.src}>
            <h3 dangerouslySetInnerHTML={{ __html: explanation.title }} />
            <img src={explanation.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExplanationSection;
