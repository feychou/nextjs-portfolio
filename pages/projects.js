import axios from 'axios';

export default function Projects({ projects }) {
  console.log(projects)
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div>{project.name}</div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const { data: projects } = await axios.get('http://localhost:3000/api/projects');
  return { props: { projects } };
};