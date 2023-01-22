import { component$, useStore } from "@builder.io/qwik";

export const randomValue = () => Math.floor(Math.random() * 6) + 1;

export default component$(() => {
  const dice = useStore({
    value: 1,
  });

  return (
    <div>
      <h2>Dice roller</h2>
      <h3>Dice value: {dice.value}</h3>
      <div>
        <button onClick$={() => (dice.value = randomValue())}>Roll</button>
      </div>
    </div>
  );
});
