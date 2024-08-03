import {
  component$,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { BeerSelector } from "~/components/BearSelector";
import { beerContextId } from "~/context/beer-context-id";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(beerContextId, didHeGetABeerSignal);
  useTask$(({track}) => {
    track(() => didHeGetABeerSignal.value);
    console.log("didHeGetABeerSignal.value", didHeGetABeerSignal);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  })

  return (
    <>
      {isMiskoVisibleSignal.value ? <Misko>I Love Chat!</Misko> : null}

      <BeerGiver></BeerGiver>
    </>
  );
});

export const BeerGiver = component$(() => {
    return (
      <>
        <BeerGiverButton></BeerGiverButton>
      </>
    );
  }
);

export const BeerGiverButton = component$(
  () => {
    const gotBeerSignal = useContext(beerContextId);
    return (
      <>
        <button
          onClick$={() => {
            gotBeerSignal.value = true;
          }}
        >
          Give a beer to Misko
        </button>
      </>
    );
  }
);

export const Misko = component$(() => {
  return (
    <>
      <div>Hi I'am Misko,</div>
      <Slot />
      <BeerSelector/>

    </>
  );
});
