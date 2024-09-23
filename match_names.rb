require 'yaml'

folder = "./_data/api"

h = {}

Dir.foreach(folder) do |filename|
  next if filename == '.' or filename == '..'
  full_filename = "#{folder}/#{filename}"
  content = File.read(full_filename)

  api_path = filename[0..-4]
  yaml_match = content.match(/^---\r?\n(.+)\r?\n---\r?\n/m)
  yaml_content = yaml_match[1]
  data = YAML.load(yaml_content)
  
  api_title = data['title']
  h[api_title] = { api_id: api_path, **data }
end

titles = ["API Pseudonymisation de documents (démo)","API ECLAIRE","API Transparence-Santé (Déclarations Entreprises)","API Judilibre","API Camino","API SI Amiante","API Annuaire de l’administration et des services publics","API Ma Sécurité","API RappelConso","API Radio France","API Indemnisation France Travail","Légifrance","API Quotient familial MSA & CAF","API portail des données de la BnF - data.bnf.fr","API ROME 4.0","API Carto - module Nature","API Impôt particulier","API Service National","API RVA Rennes Métropole","API BDM","API Aides financieres de l’ADEME","API Accès à l'emploi","API Maladies Rares (ORPHAcode)","API Gallica IIIF","API Alternance","API Mobilic","Hub'Eau - Qualité de l'eau potable","API données ouvertes de l’Urssaf","API données foncières","API info-financière","API Look4 Géoportail","API Engagement","API Aides financières à la rénovation énergetique (Simul’Aid€s)","API Référentiel des agences France Travail","scanR, moteur de la recherche et de l'innovation","Le Point d’Accès National aux données de transport","API Carto - module WFS Géoportail","Hub'Eau - Etat piscicole des rivières","API travaux Rennes Métropole","Annuaire de l’Education Nationale","API Complémentaire santé solidaire","API Fonds Vert","API Gels des avoirs","API Carto - module AOC","Hub'Eau - Indicateurs Eau potable et Assainissement","API IMPRIM'FIP","API Conventions collectives","API DPE logements","API Statut Etudiant - écriture","API Marché du travail","Webstat","API de droits à l'Assurance Maladie","API France Chaleur Urbaine","API Bulletin officiel des annonces des marchés publics (BOAMP)","API Annonces officielles et comptes annuels des associations","API Evénements France Travail","OpenFisca","API Professionnels RGE","API Document unique de marché européen (Dume)","API Carto - module Cadastre","API Référentiel SANDRE Version 1","API La Bonne Boite","API Statut étudiant","API Répertoire National des Métiers","API Particulier","API Associations (RNA)","API CaptchEtat","API statut demandeur d'emploi","API Mir@bel (revues)","API Resultats de qualité des services publics","API Système Universitaire de Documentation (Sudoc)","API Pro Santé Connect","API data subventions","API Bulletin officiel des annonces civiles et commerciales (BODACC)","API Service Finances Publiques (SFiP)","API Data ES","API Gallica Recherche","Hub'Eau - Qualité des cours d'eau","API Déclaration préalable à l'embauche","API Gallica Document","API Fichier des Comptes Bancaires et Assimilés (FICOBA)","API scolarité de l'élève","API Accès libre","API Résultats aux examens","API Base nationale des défibrillateurs","API Ingres Noyau","API Carto - module Géoportail de l'Urbanisme (GPU)","API Indicateur de Fréquences de Traitements phytopharmaceutiques","API Indemnités Journalières de la CNAM","API catalogue des données ouvertes - data.gouv.fr","API Adresse (Base Adresse Nationale - BAN)","API Sudocuh - Résultats des enquêtes d'urbanisme","Hub'Eau - Qualité des nappes d'eau souterraine","API Recherche des personnes physiques (R2P)","API Identifiants et Référentiels pour l'enseignement supérieur et la recherche (IdRef)","API Immersion Facilitée","API Sesali","API Informations sur l'emploi dans un territoire","API Services Publics Plus - Structures","API Tiers de prestation","API Recherche d’entreprises","Hub'Eau - Hydrobiologie","API Professionnels BIO","API Données locales de consommation d'énergie","API Base Carbone","API Impacts environnementaux - AGRIBALYSE®","API Diffusion des Fichiers de Theses sur theses.fr","API Données ouvertes d'Enedis","Offres d'emploi","API Smart Verify","API Registre des Bénéficiaires Effectifs (RBE)","API données ouvertes de l'ONISEP","API GRDF ADICT","API VigiEau","Hub'Eau - Température des cours d'eau","API data·inclusion","API Carto - module RPG","API données ouvertes de Loire-Atlantique","Hub'Eau - Prélèvements en eau","API Aides Territoires","API Géorisques","API Carto - module Codes Postaux","API Terminologies de Santé (SMT)","API calendrier scolaire","API Tierce Déclaration auto-entrepreneur","API Statut étudiant boursier","API FANTOIR","API Marché de l'inclusion","API Bulletin des Annonces Légales Obligatoires (BALO)","API contrôle CVEC (contribution de vie étudiante)","FranceConnect et les API FranceConnectées","API Découpage Administratif - (API Geo)","API données ouvertes de l’Éducation Nationale","API Chorus Pro","API Prix des contrôles techniques","API Mon entreprise","API Métadonnées","API Anotéa","API Ecobalyse - impacts environnementaux des produits textiles","AgentConnect","Jours fériés","API Diffusion Données Locales","API QuiForme","API Tierce Déclaration Cesu","API Services Publics Plus - Expériences","le.taxi","Hub'Eau - Hydrométrie","API Ingres - Nomenclatures","API Sortants de formation et accès à l'emploi","API Démarches du Ministère de la culture","API DPE bâtiments tertiaires","Hub'Eau - Piézométrie","Hub'Eau - Surveillance du littoral","API Les emplois de l'inclusion","API Sirene","API Mes Aides Reno","API Tierce Déclaration Pajemploi","Hub'Eau - Ecoulement des cours d'eau","API Entreprise","API Tracabilité des déchets dangereux - Trackdéchets","MonComptePro","API Interroger les Données de theses.fr","API Export des Données de theses.fr"]
titles.each do |title|
  data = h[title]

  # if data['datagouv_uuid']
  #   puts "#{data['datagouv_uuid'].join(",")};#{title}"
  # else
  #   puts ";#{title}"
  # end]

  if data
    puts "https://api.gouv.fr/les-api/#{data[:api_id]};#{title}"
  else
    puts ";#{title}"
  end
end
