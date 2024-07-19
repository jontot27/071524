export default function Fruit({ name, price, emoji, status }) {
  return (
    <>
      <h3>
        {emoji} {name} {price} {status ? " - Sold Out" : ""}
      </h3>
    </>
  );
}
