import apiEntrepriseQuestions from './api-entreprise';
import isQuestionsTree from './france-connected-api';
import isBouquetApiPartepriseQuestions from './is_bouquet_api_parteprise';
import apiParticulierQuestions from './api-particulier';
import formulaireUniqueQuestions from './formulaire-unique';

export const allQuestions = {
  'api-entreprise': apiEntrepriseQuestions,
  'france-connected-api': isQuestionsTree,
  'is_bouquet_api_parteprise': isBouquetApiPartepriseQuestions,
  'api-particulier': apiParticulierQuestions,
  'formulaire-unique': formulaireUniqueQuestions,
} as { [key: string]: any };
