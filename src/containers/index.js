import React from 'react';
import Loadable from 'react-loadable';

export const Loading = () => <div>Loading...</div>;

export const Login = Loadable({
  loading: Loading,
  loader: () => import('./Login')
});

export const Main = Loadable({
  loading: Loading,
  loader: () => import('./Main')
});

export const Total = Loadable({
  loading: Loading,
  loader: () => import('./Total')
});

export const MarketingM = Loadable({
  loading: Loading,
  loader: () =>
    import('./MarketingM')
});

export const ListM = Loadable({
  loading: Loading,
  loader: () =>
    import('./ListM')
});
export const SupplierC = Loadable({
  loading: Loading,
  loader: () => import('./SupplierC')
})