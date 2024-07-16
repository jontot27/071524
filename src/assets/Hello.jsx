function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message}
        {person.name}
        {person.emoji}
        {person.birthDate}
      </h1>
    </div>
  );
}

export default Hello;
