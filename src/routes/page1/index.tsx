import { component$, Slot, useSignal } from '@builder.io/qwik';

export default component$(() => {

  const searchSignal = useSignal('');
  

  return <div>
    This is Page 1

    <hr />
    
    <input
      onInput$={(e) => {
        searchSignal.value = (e.target as HTMLInputElement).value;
      }}
    type="text" placeholder="Type your search"/>
    
    <hr />
    
    <Projector content={searchSignal.value}>
      {searchSignal.value}
    </Projector>
  </div>
});


export const Projector = component$(({content}: {content: string}) => {
  return <div>You typed: <Slot/></div>;
});