type t;

[@bs.module "antd"] external message: t = "message";

[@bs.send.pipe: t] external success: string => unit = "success";
[@bs.send.pipe: t] external error: string => unit = "error";
[@bs.send.pipe: t] external info: string => unit = "info";
[@bs.send.pipe: t] external warning: string => unit = "warning";
[@bs.send.pipe: t] external warn: string => unit = "warn";
[@bs.send.pipe: t] external loading: string => unit = "loading";