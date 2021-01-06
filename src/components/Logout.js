import { useEffect } from "react";
import { removeUserSession } from "../utils";

export default function Logout(props) {
  useEffect(() => {
    removeUserSession();
    props.setUser(null);
    props.history.push("/");
  }, []);

  return null;
}
