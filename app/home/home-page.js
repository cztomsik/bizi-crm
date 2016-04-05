import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <h3>Home</h3>
        </b-container>
      </b-jumbotron>

      <b-container>
        <div>
          <b-alert>
            <h4>Welcome</h4>
            This is sample application showcasing bizi
          </b-alert>

          <b-nav class="nav-tabs" role="tablist">
            <li role="presentation" class="active"><a aria-controls="home" role="tab" data-toggle="tab" data-target="#home">Home</a></li>
            <li role="presentation"><a aria-controls="profile" role="tab" data-toggle="tab" data-target="#profile">Profile</a></li>
            <li role="presentation"><a aria-controls="messages" role="tab" data-toggle="tab" data-target="#messages">Messages</a></li>
            <li role="presentation"><a aria-controls="settings" role="tab" data-toggle="tab" data-target="#settings">Settings</a></li>
          </b-nav>

          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">home</div>
            <div role="tabpanel" class="tab-pane" id="profile">profile</div>
            <div role="tabpanel" class="tab-pane" id="messages">messages</div>
            <div role="tabpanel" class="tab-pane" id="settings">settings</div>
          </div>
        </div>

        <b-well>
          Well
        </b-well>

        <div class="panel panel-default">
          <div class="panel-heading">Panel</div>
          <div class="panel-body">Body</div>
        </div>
      </b-container>
    </b-page>
  `
});
