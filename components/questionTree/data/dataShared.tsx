import { MouseEvent } from 'react';
import rightArrow from '../../../uiComponents/icon/rightArrow';
import file from '../../../uiComponents/icon/file';
import { ButtonLink } from '../../../uiComponents';
import constants from '../../../constants';

export const ApiEntrepriseNonEligible: React.FC<{
    particulier?: Boolean,
    withAnnuaire?: Boolean
  }> = ({particulier, withAnnuaire}) => {
  return (
    <>
      {
        particulier ?
        null :
        <p><strong>Vous n'êtes pas éligible à l'API Entreprise</strong> <span role="img" aria-label="émoji non">🚫</span></p>
      }
      <p>
        L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
      </p>
      {
        withAnnuaire ?
        <>
          <p><strong>Vous recherchez une information sur une entreprise/association :</strong></p>
          <a className='outside-link' href='https://annuaire-entreprises.data.gouv.fr/' target='_blank'>Consulter l'annuaire des entreprises</a>
          <p>
            <strong>Vous avez reperé une erreur dans la base de donnée Sirene sur votre entreprise/association :</strong><br/>

            Signalez-là ici: <a href='https://www.sirene.fr/sirene/public/nous-contacter' target='_blank'>https://www.sirene.fr/sirene/public/nous-contacter</a>
          </p>
        </>
        : null
      }
      <p><strong>D’autres API, publiques, permettent d’accéder à des données sur les entreprises et les associations :</strong></p>
      <ul>
        <li>L'<a href='/les-api/sirene_v3' target='_blank'>API Sirene, produite par l'INSEE</a>, donnant accès aux données du répertoire Sirene de l’INSEE, à l’exception des entreprises non-diffusibles ;</li>
        <li>L'<a href='/les-api/api_rna'target='_blank'>API RNA, produite par la DINUM</a>, interrogeant le répertoire des associations françaises ;</li>
        <li>L'<a href='/les-api/api-rncs'target='_blank'>API RNCS, produite par l'INPI</a>, donnant accès aux informations publiques détenues par les greffes sur les sociétés françaises ;</li>
        <li>L'<a href='/les-api/api_rnm'target='_blank'>API RNM, produite par CMA France</a>, produite par CMA France, interrogeant le répertoire des entreprises artisanales françaises.</li>
      </ul>
      <a className='secondary-link' href='rechercher-api'>Rechercher une autre API {rightArrow}</a>
      <style jsx>{`
        a {
          color: ${constants.colors.blue}
        }
        ul {
          margin-left: 20px;
        }
      `}</style>
    </>
  )
};

export const eligible =
  <>
    <p><strong>Vous êtes éligible !</strong> <span role="img" aria-label="émoji oui">👌</span> Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public.</p>
  </>

export const eligibleEditeurOk =
  <>
    <p><strong><span role="img" aria-label="émoji ok">✅</span> Bonne nouvelle ! Vous êtes éligible et votre éditeur/profil acheteur a déjà intégré l’API Entreprise.</strong>
    </p>
    <p>
      Vous n’avez plus qu’à vous adresser directement à votre éditeur.
      {/* TODO: add when form available */}
      {/* <br/>Ce dernier vous transmettra un lien vers le formulaire adéquat, prérempli, votre demande sera alors très rapidement validée. */}
    </p>
  </>

export const eligibleEditeurNotOk =
  <>
    <p><strong>Vous êtes éligible mais votre éditeur/profil acheteur n’a pas intégré l’API Entreprise<span role="img" aria-label="émoji loupe">🔎</span></strong><br/>Déposez une demande pour expliciter vos besoins et votre situation. L’équipe API Entreprise vous contactera pour identifier des pistes de solutions, et contactera le cas échéant votre éditeur (pensez donc bien à préciser le nom de votre éditeur et ses coordonnées).
    </p>
    <div className='margin-top'>
      <ButtonLink href="https://datapass.api.gouv.fr/api-entreprise" target='_blank'>Déposer une demande</ButtonLink>
    </div>
    <p>
      <strong>Nota :</strong><br/>L’API Entreprise s’utilise au travers d’un logiciel métier, votre éditeur vous met probablement à disposition un logiciel de ce type.
    </p>
    <p>
      En revanche, comme ce dernier n’a pas encore intégré l’API Entreprise, les instructeurs de l’API Entreprise devront, entre autres, vérifier si votre éditeur a les <a href='https://entreprise.api.gouv.fr/doc/#fondamentaux' target='_blank'>prérequis techniques</a> pour utiliser l’API Entreprise.
    </p>
  </>

export const eligibleDevelopersOk =
  <>
    <p>
      <strong><span role="img" aria-label="émoji ok">✅</span> Vous êtes éligible et avez les compétences techniques pour intégrer l’API Entreprise</strong> à votre logiciel interne de traitement des démarches des associations et des entreprises.
    </p>
    <div className='margin-top'>
      <ButtonLink href="https://datapass.api.gouv.fr/api-entreprise" target='_blank'>Déposer une demande</ButtonLink>
    </div>
  </>

export const eligibleNoDevelopers =
  <>
    <p>
      <strong>
        Vous êtes éligible mais n'avez pas les <a href='https://entreprise.api.gouv.fr/doc/#fondamentaux' target='_blank'>prérequis techniques</a> pour utiliser l’API Entreprise<span role="img" aria-label="émoji loupe">🔎</span>
      </strong>
    </p>
    <p>
      L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
    </p>
    <div>
      <p className='small-margin-bottom'><strong>Vous pouvez :</strong></p>
      <ul>
        <li>
          <strong>contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise :</strong>
          <div><a className='outside-link' href='https://entreprise.api.gouv.fr/use_cases/aides_publiques/#liste-d%C3%A9diteurs' target='_blank'>Liste des éditeurs Aides Publiques</a></div>
          <div><a className='outside-link' href='https://entreprise.api.gouv.fr/use_cases/marches_publics/#liste-d%C3%A9diteurs' target='_blank'>Liste des éditeurs Marchés Publics</a></div>
        </li>
        <li>
          {/* TODO: Remove after 'Merci' when datapass form available */}
          <strong>déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.</strong> Les instructeurs d’API Entreprise étudieront votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation. Merci de nous indiquer dans le formulaire que vous n'avez pas d'équipe technique pour accélerer le traitement de votre demande.
          <div className='margin-top'>
            <ButtonLink href="https://datapass.api.gouv.fr/api-entreprise" target='_blank'>Déposer une demande</ButtonLink>
          </div>
        </li>
      </ul>
    </div>
  </>

export const editeurOk =
  <>
    <p><strong><span role="img" aria-label="émoji ok">✅</span> Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise.</strong></p>
    <p><span role="img" aria-label="émoji avertissement">⚠️</span>En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même</p>
    <div className='margin-top'>
      <ButtonLink href="https://datapass.api.gouv.fr/api-entreprise?demarche=editeur">Déposer une demande</ButtonLink>
    </div>
  </>

export const editeurAskAdministration =
  <>
    <p><strong>L’administration pour laquelle vous proposez une prestation est éligible à l’API Entreprise </strong><span role="img" aria-label="émoji ok">✅</span></p>
    <p><strong>C’est à elle de compléter une demande auprès d’API Entreprise.</strong> Elle devra dans sa demande d’habilitation vous renseigner en tant que “contact technique”. Le lien ci-dessous permet à l’administration d’accéder à la demande d’accès, partagez-lui :</p>
    {/* TODO: change with specific form on datapass (when available) */}
    <a href='/les-api/api-entreprise/demande-acces' target='_blank'>Lien vers la page</a><button onClick={(e) => copyToClipboard(e)}className='secondary-link button-copy'>Copier le lien <span role="img" aria-label="icon file">{file}</span></button>
  </>

const copyToClipboard = (e: MouseEvent) => {
  const t = e.target as HTMLInputElement
  navigator.clipboard.writeText(t.baseURI);
}
