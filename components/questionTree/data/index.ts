import apiEntrepriseQuestions from './api-entreprise';
import isFranceConnectedQuestions from './france-connected-api';

export const allQuestions = {
  'api-entreprise': apiEntrepriseQuestions,
  'france-connected-api': isFranceConnectedQuestions,
} as { [key: string]: any };
