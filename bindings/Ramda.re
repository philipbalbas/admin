[@bs.module "ramda"] external isEmpty: 'a => bool = "isEmpty";

[@bs.module "ramda"]
external difference: (array('a), array('a)) => array('a) = "difference";

[@bs.module "ramda"]
external differenceWith:
  (('a, 'b) => bool, array('a), array('b)) => array('c) =
  "differenceWith";