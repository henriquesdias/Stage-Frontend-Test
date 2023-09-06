import { useLocation, useNavigate } from "react-router";

import PrincipalWrapper from "../components/PrincipalWrapper";

export default function Process() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <PrincipalWrapper title={state.title}>
      <p className="m-8">{state.description}</p>
      <div
        className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] m-6 rounded-2xl p-8 text-xl cursor-pointer font-bold "
        key={state}
        onClick={() => navigate("/new-subprocess", { state: { id: state.id } })}
      >
        <span>Create a new subprocess</span>
        <span className="text-4xl">+</span>
      </div>
    </PrincipalWrapper>
  );
}
