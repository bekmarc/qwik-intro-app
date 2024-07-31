import { component$, Slot, useSignal } from "@builder.io/qwik";

export default component$(() => {
    const isMiskoVisibleSignal = useSignal(false);
  return (
    <>
      <button onClick$={() => {
        isMiskoVisibleSignal.value = !isMiskoVisibleSignal.value;
      }}>Click me</button>
      {isMiskoVisibleSignal.value ? 
      <Misko>I Love Chat!</Misko>
      : null}
      <div>Page 3</div>
    </>
  );
});

export const Misko = component$(() => {
  return <>
  <div>Hi I'am Misko,</div>
  <Slot/>
  </>;
});
