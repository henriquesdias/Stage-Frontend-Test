import { useState } from "react";

import SideBar from "./SideBar";

export default function PrincipalWrapper({ children, title }) {
  const [showIconsDelete, setShowIconsDelete] = useState(false);
  return (
    <main className="flex h-screen w-screen">
      <SideBar
        showIconsDelete={showIconsDelete}
        setShowIconsDelete={setShowIconsDelete}
      />
      <div className="w-[100%]">
        <header className="flex justify-center items-center h-20 text-xl border-b-2 border-solid border-[#e8e8e8] gap-4">
          {title}
        </header>
        {children}
      </div>
    </main>
  );
}
