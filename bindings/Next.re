module GetServerSideProps = {
  // See: https://github.com/zeit/next.js/blob/canary/packages/next/types/index.d.ts
  type context('params) = {
    params: 'params,
    query: Js.Dict.t(string),
    /*req: Js.Nullable.t(Js.t('a)),*/
  };

  type t('props, 'params) =
    context('params) => Js.Promise.t({. "props": 'props});
};

module GetStaticProps = {
  // See: https://github.com/zeit/next.js/blob/canary/packages/next/types/index.d.ts
  type context('props, 'params) = {
    params: 'params,
    query: Js.Dict.t(string),
    req: Js.Nullable.t(Js.t('props)),
  };

  type t('props, 'params) =
    context('props, 'params) => Js.Promise.t({. "props": 'props});
};

module GetStaticPaths = {
  // 'params: dynamic route params used in dynamic routing paths
  // Example: pages/[id].js would result in a 'params = { id: string }
  type path('params) = {params: 'params};

  type return('params) = {
    paths: array(path('params)),
    fallback: bool,
  };

  type t('params) = unit => Js.Promise.t(return('params));
};

module Link = {
  [@bs.module "next/link"] [@react.component]
  external make:
    (
      ~href: string=?,
      ~_as: string=?,
      ~prefetch: bool=?,
      ~replace: option(bool)=?,
      ~shallow: option(bool)=?,
      ~passHref: option(bool)=?,
      ~children: React.element
    ) =>
    React.element =
    "default";
};

module Router = {
  /*
      Make sure to only register events via a useEffect hook!
   */
  module Events = {
    type t;

    [@bs.send]
    external on:
      (
        t,
        [@bs.string] [
          | `routeChangeStart(string => unit)
          | `routeChangeComplete(string => unit)
          | `hashChangeComplete(string => unit)
        ]
      ) =>
      unit =
      "on";

    [@bs.send]
    external off:
      (
        t,
        [@bs.string] [
          | `routeChangeStart(string => unit)
          | `routeChangeComplete(string => unit)
          | `hashChangeComplete(string => unit)
        ]
      ) =>
      unit =
      "off";
  };

  type router('a) = {
    route: string,
    asPath: string,
    events: Events.t,
    query: Js.t('a),
  };

  type t;

  [@bs.module "next/router"] external router: t = "default";

  [@bs.send.pipe: t] external push: string => unit = "push";
  [@bs.send.pipe: t] external back: unit => unit = "back";
  [@bs.send.pipe: t] external reload: unit => unit = "reload";

  [@bs.module "next/router"]
  external useRouter: unit => router('a) = "useRouter";
};

module Head = {
  [@bs.module "next/head"] [@react.component]
  external make: (~children: React.element) => React.element = "default";
};

module Error = {
  [@bs.module "next/head"] [@react.component]
  external make: (~statusCode: int, ~children: React.element) => React.element =
    "default";
};

type dynamicOptions = {
  ssr: bool,
  loading: unit => React.element,
};

[@bs.module "next/dynamic"]
external dynamic: (string, dynamicOptions) => React.element = "default";