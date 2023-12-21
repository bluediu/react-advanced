import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () => import('../01-lazyload/components/Layout/LazyLayout')
);

// Note: `path` & `to` must have the same name.
export const routes: IRoute[] = [
  {
    path: '/lazyload/*',
    to: 'lazyload',
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  {
    path: '/nolazy',
    to: 'nolazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
