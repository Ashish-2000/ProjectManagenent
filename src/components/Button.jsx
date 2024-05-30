export default function Button({children,...props }) {
    
    return (
        <button className="px-6 py-2 rounded text-stone-50 bg-stone-700 hover:bg-stone-950 "{...props}>{children}</button>
    )
}