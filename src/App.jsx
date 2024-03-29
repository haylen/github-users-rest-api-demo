import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error404 from 'components/shared/errors/Error404';
import PageLayout from 'components/shared/PageLayout'
import UsersContextProvider from 'components/shared/UsersContextProvider';
import UserDetails from 'components/UserDetails';
import UsersOverview from 'components/UsersOverview';
import theme from 'config/theme';

const App = () => (
  <ChakraProvider theme={extendTheme(theme)}>
    <UsersContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <PageLayout><UsersOverview /></PageLayout>
          </Route>
          <Route exact path="/users/:username">
            <PageLayout><UserDetails /></PageLayout>
          </Route>
          <Route>
            <PageLayout><Error404 /></PageLayout>
          </Route>
        </Switch>
      </Router>
    </UsersContextProvider>
  </ChakraProvider>
);

export default App;
