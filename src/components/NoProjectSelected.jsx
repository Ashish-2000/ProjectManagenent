import image from '../assets/no-projects.png'
import Button from "./Button"

export default function NoProjectSelected({ handleStartAddProject }) {
  return (
      <div className='mt-24 text-center w-2/3'>
          <img  src={image} className='w-16 h-16 mx-auto object-contain '  />
          <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
          <p className='text-stone-400 mb-4'>Select a project or get started with new one</p>
          <p className='mt-8'>
        <Button onClick={handleStartAddProject} >Create New Project</Button>
          </p>
    </div>
  )
}
