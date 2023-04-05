import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Home from '@/routes/Home';
// eslint-disable-next-line import/extensions
import About from '@/routes/About';
// eslint-disable-next-line import/extensions
import Login from '@/routes/Login';
// eslint-disable-next-line import/extensions
import Profile from '@/routes/Profile';
// eslint-disable-next-line import/extensions
import NoMatch from '@/routes/NotMatch';
// eslint-disable-next-line import/extensions
import Layout from '@/components/Layout';
// eslint-disable-next-line import/extensions
import SinglePage from '@/routes/SinglePage';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default TodoApp;
