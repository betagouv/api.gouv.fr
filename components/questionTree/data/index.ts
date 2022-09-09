import apiEntrepriseQuestions from './api-entreprise';
import isFranceConnectedQuestions from './france-connected-api';
import isDgfipMigration from './dgfip-migration';

export const allQuestions = {
  'api-entreprise': apiEntrepriseQuestions,
  'france-connected-api': isFranceConnectedQuestions,
  'dgfip-migration': isDgfipMigration,
} as { [key: string]: any };
