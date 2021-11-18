import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserDetails from 'components/UserDetails';
import UsersContextProvider from 'components/UsersContextProvider';
import UsersOverview from 'components/UsersOverview';
import theme from 'config/theme';

const App = () => (
  <ChakraProvider theme={extendTheme(theme)}>
    <UsersContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <UsersOverview />
          </Route>
          <Route exact path="/users/:username">
            <UserDetails />
          </Route>
          <Route>404</Route>
        </Switch>
      </Router>
    </UsersContextProvider>
  </ChakraProvider>
);

export default App;
