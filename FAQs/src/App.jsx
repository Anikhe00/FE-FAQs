import FaqAccordion from "./FaqAccordion.jsx"
import { useState } from "react"
import faqData from "./data.js"
import StarIcon from "./assets/ph_star-four-fill.svg"
import VectorLine from "./assets/Vector.svg"

function App() {
  const [activeId, setActiveId] = useState(1); 

return (
  <div className="bg-[#F8EEFF] w-full h-dvh flex flex-col pr-6 pl-6 items-center justify-center">
    <div className="bg-[#301534] flex justify-center items-center lg:h-[320px] md:h-[320px] h-[240px] absolute top-0 overflow-hidden left-0">
      <img className="w-[131rem] h-[43.4rem] object-none" src={VectorLine} alt="Vector" />
    </div>
    <div className="z-10 relative w-full lg:max-w-[560px] md:max-w-[560px] bg-white shadow-[0px_32px_56px_rgba(80,0,118,0.10)  p-6 lg:p-10 h-auto flex flex-col lg:gap-8 md:gap-8 gap-6 lg:rounded-2xl md:rounded-2xl rounded-lg">

      <div className="flex flex-row items-center gap-4 h-auto">
        <img className="lg:size-[40px] md:size[40px] size-[32px]" src={StarIcon} alt="Star" />
        <h1 className="lg:text-[56px] md:text-[56px] text-[32px] font-bold text-[#301534] lg:leading-[64px] leading-[40px]">FAQs</h1>
      </div>

    <div className="flex flex-col w-full h-auto">
      {faqData.map((item, index) => (
        <div key={item.id}>
          <FaqAccordion 
            {...item} 
            isExpanded={item.id === activeId}
            onToggle={() => setActiveId(item.id === activeId ? null : item.id)}
          />
          {index !== faqData.length - 1 && (
            <>
              <div className="lg:h-5 md:h-5 h-4" />
              <div className="h-[1px] bg-[#DDB2FF] opacity-20" />
              <div className="lg:h-5 md:h-5 h-4" />
            </>
          )}
        </div>
      ))}
    </div>
    
    </div>
  </div>
   
)
}

export default App
