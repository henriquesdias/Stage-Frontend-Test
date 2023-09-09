import { useLocation, useNavigate, useParams } from "react-router";

import PrincipalWrapper from "../components/PrincipalWrapper";
import Subprocesses from "../components/Subprocesses";

export default function Process() {
  const { state } = useLocation();
  const { process_id } = useParams();
  const navigate = useNavigate();
  return (
    <PrincipalWrapper title={state.title} process_id={process_id}>
      <p className="m-6">{state.description}</p>
      <div
        className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] m-6 rounded-2xl p-8 text-xl cursor-pointer font-bold shadow-[10px_10px_8px_-6px_rgba(0,0,0,0.1);]"
        key={state}
        onClick={() => navigate("/new-subprocess", { state: { id: state.id } })}
      >
        <span>Create a new subprocess</span>
        <span className="text-4xl">+</span>
      </div>
      <h1 className="ml-6 mb-8 text-[#A4A4A4] font-bold">Subprocesses</h1>
      <Subprocesses process_id={state.id} />
    </PrincipalWrapper>
  );
}
