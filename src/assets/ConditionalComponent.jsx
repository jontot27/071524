import FalseStatement from "./FalseStatement";
import TrueStatement from "./TrueStatement";

export default function ConditionalComponent() {
  const display = false;

  if (display) {
    return <TrueStatement />;
  } else {
    return <FalseStatement />;
  }
}
