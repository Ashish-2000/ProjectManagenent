import Input from "./Input"
import Button from "./Button"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    let title= useRef();
    let description = useRef();
    let dueDate = useRef();
    const modal=useRef()

    function handleSave() {
      const  enteredTitle = title.current.value
      const  enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
        
        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open()
            return;
        }
        
        
         onAdd({
            title: enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate,
        })
    }
    return (
        <>
            <Modal ref={modal} >
                <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input !</h2>
                <p className='text-stone-400 mb-4'>Oops... looks like you forget to enter</p>
                <p className='text-stone-400 mb-4'>Please provide valid data</p>
            </Modal>
        <div className="w-[35rem] mt-16 ">
           <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel}
                        className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                
                    <li><Button onClick={handleSave}>Save</Button></li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title'/>
                <Input ref={description} label='Description' textArea />
                <Input type='date' ref={dueDate} label='Due Date' />
               
            </div>
        </div>
        </>
    )
}