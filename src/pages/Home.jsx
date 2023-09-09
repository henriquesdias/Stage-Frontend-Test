import { useNavigate } from "react-router";

import PrincipalWrapper from "../components/PrincipalWrapper";

export default function Home() {
  const navigate = useNavigate();
  return (
    <PrincipalWrapper title={"Welcome"}>
      <div
        className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] m-6 rounded-2xl p-8 text-xl cursor-pointer font-bold shadow-[10px_10px_8px_-6px_rgba(0,0,0,0.1);]"
        onClick={() => navigate("/new-process")}
      >
        <span>Create a new process</span>
        <span className="text-4xl">+</span>
      </div>
    </PrincipalWrapper>
  );
}
