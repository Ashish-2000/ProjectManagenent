import { forwardRef } from "react"

const Input=forwardRef( function Input({ textArea, label, ...props },ref) {
    const classes ="w-full p-1 border-b-2 rounded-sm text-stone-300 bg-stone-200 text-stone-600 focous:outline-none focous:border-stone-600"
    
    return (
        <p className="flex flex-col gap-1 my-4">
            <lable className='text-sm font-bold uppercasetext-stone-500'>{label}</lable>
            {textArea ? <textarea ref={ref} className={classes} {...props} />
                : <input ref={ref} className={classes} {...props} />}
        </p>
    )
})

export default Input