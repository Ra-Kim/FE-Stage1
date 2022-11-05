import MainContent from "../components/MainContent";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <MainContent isMobile = {isMobile} />
    </>
  );
}

export default Home;
