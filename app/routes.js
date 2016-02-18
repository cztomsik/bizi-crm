import SignInPage from './sign-in/sign-in-page';
import DashboardPage from './dashboard/dashboard-page';
import ContactListingPage from './contacts/contact-listing-page';
import NewContactPage from './contacts/new-contact-page';
import ShowContactPage from './contacts/show-contact-page';
import EditContactPage from './contacts/edit-contact-page';

module.exports = {
  'sign-in': SignInPage,
  'dashboard': DashboardPage,
  'contacts': ContactListingPage,
  'contacts-new': NewContactPage,
  'contacts-show': ShowContactPage,
  'contacts-edit': EditContactPage
};
