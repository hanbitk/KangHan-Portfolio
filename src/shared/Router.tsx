import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import { PATH_URL } from '../utils/constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path={PATH_URL.ABOUT} element={<About />} />
          <Route path={PATH_URL.PROJECTS} element={<Projects />} />
          <Route path={PATH_URL.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
