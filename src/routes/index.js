import { RouteObject, Navigate } from 'react-router-dom';

import { LINKS } from '../utils/constants';
import Main from '../pages/main/Main';
import Layout from '../components/Layout/Layout';

const ROUTES = [
  {
    path: LINKS.main,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
];

export { ROUTES };
