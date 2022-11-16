import apiEntrepriseQuestions from './api-entreprise';
import isFranceConnectedQuestions from './france-connected-api';
import apiParticulierQuestions from './api-particulier';

export const allQuestions = {
  'api-entreprise': apiEntrepriseQuestions,
  'france-connected-api': isFranceConnectedQuestions,
  'api-particulier': apiParticulierQuestions,
} as { [key: string]: any };
