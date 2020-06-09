type t;

[@bs.module "fuse.js"] [@bs.new]
external make: (array('a), Js.t('b)) => t = "default";

[@bs.send.pipe: t] external search: string => array(Js.t('a)) = "search";