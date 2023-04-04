import { useParams } from 'react-router-dom';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About app',
    description:
      `This application lets us add to-dos, edit, and delete items.
      Log in to see the delete feature. It also persists to-dos 
      in the browser's local storage for a subsequent visit.`,
  },
  {
    slug: 'about-developer',
    title: 'About developer',
    description:
      `Nurbol Sultanov is a beginner software engineer studying in Microverse.
      If you want to see more of Nurbol's works visit: github.com/everinurmind.`,
  },
];


const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;