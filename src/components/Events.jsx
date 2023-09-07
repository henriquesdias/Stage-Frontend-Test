import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";

export default function Events({ subprocess_id }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pl-8 w-full overflow-x-auto">
      <span className="flex items-center text-xl mb-4 font-bold gap-2">
        Events
        <GrAddCircle
          className="cursor-pointer"
          onClick={() => navigate("/new-event", { state: subprocess_id })}
        />
      </span>
      <div className="flex gap-8">
        <div className="flex flex-col p-2 w-44 h-28 bg-[blue] rounded-xl gap-1 cursor-pointer">
          <span>Título do evento</span>
          <span>Data: 27/12/2025</span>
          <span>Horário: 14h</span>
        </div>
        <div className="flex flex-col p-2 w-44 h-28 bg-[blue] rounded-xl gap-1 cursor-pointer">
          <span>Título do evento</span>
          <span>Data: 27/12/2025</span>
          <span>Horário: 14h</span>
        </div>
      </div>
    </div>
  );
}
