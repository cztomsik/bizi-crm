import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <h3><b-icon /> Home</h3>
        </b-container>
      </b-jumbotron>

      <b-container>
        <b-panel>
          Panel body
        </b-panel>

        <b-panel header="Header">
          Body
        </b-panel>
      </b-container>
    </b-page>
  `
});
