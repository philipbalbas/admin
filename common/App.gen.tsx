/* TypeScript file generated from App.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const AppBS = require('./App.bs');

// tslint:disable-next-line:interface-over-type-literal
export type pageProps = unknown;

// tslint:disable-next-line:interface-over-type-literal
export type PageComponent_t = (_1:pageProps) => JSX.Element;

// tslint:disable-next-line:interface-over-type-literal
export type props = { readonly Component: PageComponent_t; readonly pageProps: pageProps };

export const make: (props:props) => JSX.Element = AppBS.make;
