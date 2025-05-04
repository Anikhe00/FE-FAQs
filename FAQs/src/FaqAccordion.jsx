import PlusIcon from "./assets/ph_plus-circle-fill.svg"
import MinusIcon from "./assets/ph_minus-circle-fill.svg"

export default function FaqAccordion({ question, answer, isExpanded, onToggle }) {
  const handleToggle = () => {
    onToggle();
  }

  return (
    <div className="flex w-full flex-col gap-3 ">
      <div onClick={handleToggle} className="flex flex-row justify-between items-center w-full cursor-pointer group">
        <h2 className="text-[#301534] font-semibold lg:text-lg md:text-lg text-base transition-colors duration-200 group-hover:text-[#AD28EB]">{question}</h2>
        <img 
        src={isExpanded ? MinusIcon : PlusIcon}
        alt={isExpanded ? "Minus" : "Plus"}
        />
      </div>

      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? "opacity-100 max-h-999px" : "opacity-0 max-h-0"}`}>
      <p className="text-[#8B6990] lg:text-base md:text-base text-sm font-normal w-full">{answer}</p>
      </div>

    </div>
  )
}