import {Router, Scene} from 'react-native-router-flux';
import OnBoardPage from '../pages/onboarding';
import SignInPage from '../pages/auth/signin';
import SignUpPage from '../pages/auth/signup';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="onboard"
          component={OnBoardPage}
          title="Home"
          initial={true}
        />
        <Scene key="signin" component={SignInPage} title="Sign In" />
        <Scene key="signup" component={SignUpPage} title="Sign Up" />
      </Scene>
    </Router>
  );
};

export default Routes;
