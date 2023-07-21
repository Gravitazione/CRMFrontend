import { Link, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { accordionData } from "../../constant/data/AccordionData";

const Accordion = () => {
  const { pathname } = useLocation();

  return (
    <div className="">
      {accordionData.map(({ title, icon, links, activeAtom }) => {
        const [active, setActive] = useAtom(activeAtom);

        return (
          <div key={title} className="min-w-[272px]">
            <div
              className="flex flex-row justify-between items-center text-black text-lg font-normal p-4"
              onClick={() => setActive(!active)}
            >
              <div className="flex flex-row items-center space-x-2">
                {icon}
                <p>{title}</p>
              </div>
              {active ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
            </div>
            {active && (
              <div className="flex flex-col text-lg text-black">
                {links.map(({ path, label }) => (
                  <Link
                    key={label}
                    to={path}
                    className={`py-4 px-8 flex flex-row items-center space-x-2 ${
                      pathname === path ? 'bg-gray text-white' : ''
                    }`}
                  >
                    <GoDotFill />
                    <p>{label}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
