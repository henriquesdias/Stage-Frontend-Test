import SideBar from "./SideBar";

export default function PrincipalWrapper({ children }) {
  return (
    <main className="flex h-screen">
      <SideBar />
      <div className="w-[100%]">
        <header className="flex justify-center items-center h-20 text-xl border-b-2 border-solid border-[#e8e8e8]">
          Welcome
        </header>
        {children}
      </div>
    </main>
  );
}
