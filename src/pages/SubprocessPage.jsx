import PrincipalWrapper from "../components/PrincipalWrapper";
import Events from "../components/Events";

import { useLocation } from "react-router";

export default function SubprocessPage() {
  // const params = useParams();
  const { state } = useLocation();
  return (
    <PrincipalWrapper title={state.title}>
      <p className="ml-8 mt-8 mb-8">{state.description}</p>
      <div className="flex flex-col w-full">
        <Events subprocess_id={state.id} />
      </div>
    </PrincipalWrapper>
  );
}
