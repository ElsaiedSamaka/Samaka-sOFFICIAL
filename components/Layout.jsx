import { useRouter } from "next/router";
import getDirection from "../utils/translations/getDirections";

const Layout = ({ children }) => {
  const { locale } = useRouter();

  return <div dir={getDirection(locale)}>{children}</div>;
};

export default Layout;
