import FalseStatement from "./FalseStatement";
import TrueStatement from "./TrueStatement";

export default function ConditionalComponent() {
  const display = true;
  return display ? <TrueStatement /> : <FalseStatement />;
}
