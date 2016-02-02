var SignInIndex = require('./sign-in/sign-in-index');
var DashboardIndex = require('./dashboard/dashboard-index');
var ContactsIndex = require('./contacts/contacts-index');
var ContactsNew = require('./contacts/contacts-new');
var ContactsShow = require('./contacts/contacts-show');
var ContactsEdit = require('./contacts/contacts-edit');

module.exports = {
  'sign-in-index': SignInIndex,
  'dashboard-index': DashboardIndex,
  'contacts-index': ContactsIndex,
  'contacts-new': ContactsNew,
  'contacts-show': ContactsShow,
  'contacts-edit': ContactsEdit
};
