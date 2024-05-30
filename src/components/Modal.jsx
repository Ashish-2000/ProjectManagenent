import { forwardRef, useImperativeHandle,useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button"


const Modal = forwardRef(function Modal({ children }, ref) {
    
    const dialog = useRef()
    
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <>
            <dialog ref={dialog} className=' backdrop:bg-stone-900/90'>
                <div className='flex flex-col p-4 rounded '>
                {children}
                <form method="dialog" className='flex justify-center text-stone-100'  >
                        <Button >Close</Button> 
                    </form>
                </div>
            </dialog>
        </>,document.getElementById('modal-root')
    )
})
export default Modal;