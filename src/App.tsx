import {Home} from "./Pages/Home.tsx";
import './index.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function App() {
  return (
    <>
        <Home/>
    </>
  )
}

export default App
