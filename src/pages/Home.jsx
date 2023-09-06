import PrincipalWrapper from "../components/PrincipalWrapper";

export default function Home() {
  return (
    <PrincipalWrapper>
      <div className="w-64 h-40 bg-[#e5ecf6] m-6 rounded-2xl p-12 text-xl cursor-pointer font-bold ">
        <span>Create a new process</span>
        <span>+</span>
      </div>
    </PrincipalWrapper>
  );
}
