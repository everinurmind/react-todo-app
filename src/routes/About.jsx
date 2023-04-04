import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  const aboutTitle = {
    fontSize: '5rem',
    fontWeight: '600',
    padding: '20px 0',
    marginBottom: '1rem',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
    textTransform: 'lowercase',
  };

  const aboutList = {
    marginLeft: '20px',
    listStyle: 'none',
  };

  return (
    <>
      <h1 style={aboutTitle}>About page</h1>
      <div className="about">
        <ul style={aboutList}>
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default About;
