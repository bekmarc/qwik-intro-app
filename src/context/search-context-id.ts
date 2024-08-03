import { createContextId, Signal } from "@builder.io/qwik";

export const searchContextId = createContextId<{searchSignal: Signal<string>, colorDefault: string}>('searchContext');