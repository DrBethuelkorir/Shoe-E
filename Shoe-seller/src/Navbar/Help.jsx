import { IoMdHelpCircleOutline } from "react-icons/io";

const Help = () => {
  return (
    <div>
        <section className="flex items-center gap-5 cursor-pointer font-large">
            <IoMdHelpCircleOutline className="w-10 h-10" />
            <h3>Help</h3>
        </section>
    </div>
  )
}

export default Help