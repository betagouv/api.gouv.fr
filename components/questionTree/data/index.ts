import apiEntrepriseQuestions from './api-entreprise';
import isFranceConnectedQuestions from './france-connected-api';
import apiParticulierQuestions from './api-particulier';
import formulaireUniqueQuestions from './formulaire-unique';

export const allQuestions = {
  'api-entreprise': apiEntrepriseQuestions,
  'france-connected-api': isFranceConnectedQuestions,
  'api-particulier': apiParticulierQuestions,
  'formulaire-unique': formulaireUniqueQuestions,
} as { [key: string]: any };
