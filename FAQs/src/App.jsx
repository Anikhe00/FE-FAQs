import FaqAccordion from "./FaqAccordion.jsx"
import { useState } from "react"
import faqData from "./data.js"
import StarIcon from "./assets/ph_star-four-fill.svg"

function App() {
  const [activeId, setActiveId] = useState(1); 

return (
  <div className="bg-[#F8EEFF] w-full h-dvh flex flex-col items-center justify-center">
    <div className="bg-[#301534] w-full h-[320px] absolute top-0 left-0"></div>
    <div className="z-10 relative w-full max-w-[560px] bg-white shadow-[0px_32px_56px_rgba(80,0,118,0.10)] p-10 h-auto flex flex-col gap-8 rounded-2xl">

      <div className="flex flex-row items-center gap-4 h-auto">
        <img src={StarIcon} size="40px" alt="Star" />
        <h1 className="text-[56px] font-bold text-[#301534] leading-[64px]">FAQs</h1>
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
              <div className="h-5" />
              <div className="h-[1px] bg-[#DDB2FF] opacity-20" />
              <div className="h-5" />
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
