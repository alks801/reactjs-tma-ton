import { FC } from 'react';

import { routes } from '../../navigation';

import { Link } from '../../components/Link';
import { Page } from '../../components/Page';

import './IndexPage.css';

export const IndexPage: FC = () => {
  return (
    <Page title="Home Page">
      <p>
        This page is a home page in this boilerplate. You can use the links below to visit other
        pages with their own functionality.
      </p>
      <ul className="index-page__links">
        {routes.map(({path, title}) => title && (
          <li className="index-page__link" key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </Page>
  );
};