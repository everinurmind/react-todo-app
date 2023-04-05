import { Outlet } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Navbar from '@/components/Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
