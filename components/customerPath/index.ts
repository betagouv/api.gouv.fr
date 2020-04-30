import ContactForm from './contactForm';
import VisitorRouter from './visitorRouter';
import Individuals from './individuals';
import Companies from './companies';
import Public from './public';

export enum VISITOR {
  ADMINISTRATION = 1,
  EDITOR = 2,
  PARTICULIER = 3,
  ENTREPRISE = 4,
}

export { ContactForm, VisitorRouter, Individuals, Companies, Public };
