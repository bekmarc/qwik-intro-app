import { createContextId, Signal } from "@builder.io/qwik";

export const beerContextId = createContextId<Signal<boolean>>('beerContext');