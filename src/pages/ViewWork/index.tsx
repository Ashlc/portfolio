import { useLocation } from "react-router-dom";

type Props = {};

const Index = (props: Props) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return <div>Index</div>;
};

export default Index;
