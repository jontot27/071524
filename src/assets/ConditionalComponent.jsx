export default function ConditionalComponent() {
  const display = false;

  if (display) {
    return (
      <div>
        <h3>Eto lalabas pag "TRUE"</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Eto lalabas pag "FALSE"</h3>
      </div>
    );
  }
}
