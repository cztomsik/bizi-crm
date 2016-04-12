import angular from 'angular';

angular.module('app').component('homePage', {
  template: `
    <b-page ng-init=" nums = [0, 1, 2] ">
      <b-jumbotron>
        <b-container>
          <h3><b-icon /> Home</h3>

          <b-switch />

          <b-dropdown-button text="dropdown" />
          <b-split-button text="split" />

          <div class="dropdown">
            <button class="btn btn-default" data-toggle="dropdown"><span class="caret" /></button>
            <div class="dropdown-menu">
              <b-dropdown-menu $items="
                [
                  {text: 'whatever'}
                ]
              " />
            </div>
          </div>
        </b-container>
      </b-jumbotron>

      <b-container>
        <b-tile>Tile</b-tile>

        <b-note>
          This is note

          <b-progress-bar />
        </b-note>

        <b-alert>
          <h4>Welcome</h4>
          This is sample application showcasing bizi
        </b-alert>

        <b-data-table
          $columns=" [
            {header: 'Name', key: 'name'},
            {header: 'Company', key: 'company'}
          ] "

          $items=" [
            {name: 'John Doe', company: 'ACME'},
            {name: 'Joe Bloggs', company: 'ACME'}
          ] "
        />

        <b-tabs ng-if>
          <panes>
            <pane header="First">
              <b-button text="First" />
            </pane>
            <pane header="{{ n }}" ng-repeat=" n in nums " ng-if=" (n % 2) == 0 ">
              <b-button text="{{ n }}" />
            </pane>
            <pane header="Last">
              <b-button text="Last" />
            </pane>
          </panes>

          Other content
        </b-tabs>

        <b-well>
          <button ng-click=" nums.pop() ">-nums</button>
          <button ng-click=" nums.push(nums.length) ">+nums</button>
        </b-well>

        <b-panel>
          Panel body
        </b-panel>

        <b-panel header-text="Header">
          <b-tabs>
            <panes>
              <pane header="Tab 1">
                Tab 1
              </pane>
              <pane header="Tab 2">
                Tab 2
              </pane>
            </panes>
          </b-tabs>
        </b-panel>
      </b-container>
    </b-page>
  `
});
