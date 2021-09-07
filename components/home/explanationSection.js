const explanations = [
  {
    title: 'Trouvez <a href="/apropos#apis">l’API</a> dont vous avez besoin',
    src: '/images/home/1.png',
  },
  {
    title: 'Obtenez l’<a href="/apropos#access">accès</a> à l’API',
    src: '/images/home/2.png',
  },
  {
    title: 'Construisez votre <a href="/apropos#service">service !</a>',
    src: '/images/home/3.png',
  },
];

const ExplanationSection = () => (
  <div id="explanation-section">
    <div className="fr-container">
      <h2>Comment ça marche&nbsp;?</h2>
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
