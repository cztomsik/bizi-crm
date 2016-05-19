import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <b-page>
      <b-grid>
        <div>
          <h2>What is this?</h2>

          A tech demo showcasing:

          <ul>
            <li>Angular 1.5</li>
            <li>Angular component router</li>
            <li>Bizi UI library</li>
            <li>Arbok server framework</li>
          </ul>
        </div>

        <b-panel header="Bizi">
          <p>Bizi is UI library</p>

          <p>It is designed to be framework agnostic so it doesn't matter if you're using Angular, React or whatever else.</p>
        </b-panel>

        <b-well>
          This is meant to be "real-world" app so it will be common to see regular HTML mixed with angular directives and bizi components. Everything playing nicely together.
        </b-well>
      </b-grid>
    </b-page>
  `
});
