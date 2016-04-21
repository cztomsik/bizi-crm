import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <b-page>
      <h3><b-icon /> Home</h3>

      <b-panel>
        Panel body
      </b-panel>

      <b-panel header="Header">
        Body
      </b-panel>
    </b-page>
  `
});
