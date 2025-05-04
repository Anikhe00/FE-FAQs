import PlusIcon from "./assets/ph_plus-circle-fill.svg"
import MinusIcon from "./assets/ph_minus-circle-fill.svg"

export default function FaqAccordion({ question, answer, isExpanded, onToggle }) {
  const handleToggle = () => {
    onToggle();
  }

  return (
    <div className="flex w-full flex-col gap-3 ">
      <div onClick={handleToggle} className="flex flex-row justify-between items-center w-full cursor-pointer group">
        <h2 className="text-[#301534] font-semibold text-lg transition-colors duration-200 group-hover:text-[#AD28EB]">{question}</h2>
        <img 
        src={isExpanded ? MinusIcon : PlusIcon}
        alt={isExpanded ? "Minus" : "Plus"}
        />
      </div>

      {isExpanded && <p className="text-[#8B6990] text-base font-normal w-full">{answer}</p>}
    </div>
  )
}