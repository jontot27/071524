import FalseStatement from "./FalseStatement";
import TrueStatement from "./TrueStatement";

export default function ConditionalComponent() {
  const display = true;
  return display ? (
    <h1>
      <TrueStatement />
    </h1>
  ) : (
    <h1>
      <FalseStatement />
    </h1>
  );
}
