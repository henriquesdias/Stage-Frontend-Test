import { useNavigate } from "react-router";

import PrincipalWrapper from "../components/PrincipalWrapper";

export default function Home() {
  const navigate = useNavigate();
  return (
    <PrincipalWrapper>
      <div
        className="flex justify-center items-center w-64 h-40 bg-[#e5ecf6] m-6 rounded-2xl p-8 text-xl cursor-pointer font-bold "
        onClick={() => navigate("/new-process")}
      >
        <span>Create a new process</span>
        <span className="text-4xl">+</span>
      </div>
    </PrincipalWrapper>
  );
}
