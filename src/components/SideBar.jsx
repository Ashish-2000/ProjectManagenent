import Button from './Button';
export default function Sidebar({ handleStartAddProject, project, onSelectProject,selectedProjectId }) {
    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase"> Your Project</h2>
                <div>
                    <Button onClick={handleStartAddProject} > + Add Project</Button>
                </div>
                <ul className='mt-8 '>
                   
                    {project.map(project => {
                        let cssclasses ='p-2 my-2 hover:bg-stone-600 truncate rounded flex justify-between shadow-inner '

                        if (project.id === selectedProjectId) {
                            cssclasses +='bg-stone-600'
                        } else {
                            cssclasses += 'bg-stone-700'
                        }

                        return (<li key={project.id} className={cssclasses}>
                           
                            <button onClick={() => onSelectProject(project.id)}
                                className='capitalize px-2'>{project.title}</button>
                            <p>{project.dueDate}</p></li>)
                })
                    }</ul>
            </aside>
        
        </>
    );
}