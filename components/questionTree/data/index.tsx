import apiEntrepriseOrAssociation from './dataEntreprise'
import apiEntrepriseEditeur from './dataEditeur'
import apiEntrepriseAdministration from './dataAdministration'

const data:{[key: string]: any} = {
  'api-entreprise-or-association' : apiEntrepriseOrAssociation,
  'api-entreprise-administration': apiEntrepriseAdministration,
  'api-entreprise-editeur': apiEntrepriseEditeur
}

 export default data;
