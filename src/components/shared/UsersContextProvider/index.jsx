import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';

import reducer, {
  INITIAL_STATE,
} from 'components/shared/UsersContextProvider/reducers';

export const UsersContext = createContext(INITIAL_STATE);

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

UsersContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UsersContextProvider;
