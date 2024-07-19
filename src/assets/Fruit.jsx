export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {/* {emoji} {name} {price} */}
      {price >= 5 ? (
        <h3>
          {emoji} {name} {price}
        </h3>
      ) : (
        ""
      )}
    </>
  );
}
