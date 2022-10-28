import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { useMediaQuery } from "react-responsive";
import "./styles.css"

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <MainContent isMobile = {isMobile} />
      {!isMobile && <Footer />}
    </>
  );
}

export default App;
