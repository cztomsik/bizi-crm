import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid">
          <h3>Home</h3>
        </div>
      </div>

      <div class="container-fluid">
        <div class="well">
          Well
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">Panel</div>
          <div class="panel-body">Body</div>
        </div>
      </div>
    </div>
  `
});
