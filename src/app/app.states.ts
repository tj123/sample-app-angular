import {AppComponent} from './app.component';
import {Ng2StateDeclaration} from '@uirouter/angular';
import {MainComponent} from "app/main/main.component";
import {WelcomeComponent} from "app/welcome/welcome.component";

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
const appState: Ng2StateDeclaration = {
  name: 'app',
  url: '/',
  component: AppComponent
};

const mainState: Ng2StateDeclaration = {
  name: 'app.main',
  url: 'main',
  component: MainComponent
};

const welcomeState: Ng2StateDeclaration = {
  name: 'app.welcome',
  url: 'welcome',
  component: WelcomeComponent
};


export const APP_STATES = [
  appState,
  mainState,
  welcomeState
];
