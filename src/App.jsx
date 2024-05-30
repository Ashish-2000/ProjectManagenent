import Sidebar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

   function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
  
  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartAddProject={handleStartAddProject} />
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar handleStartAddProject={handleStartAddProject} project={projectState.projects}
          onSelectProject={handleSelectProject } />
        {content}
        
      </main>
      
    </>
  );
}

export default App;
