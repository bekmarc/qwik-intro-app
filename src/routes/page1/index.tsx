import { component$,  useContext, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { searchContextId } from '~/context/search-context-id';

export default component$(() => {

  const searchSignal = useSignal('');
  
  useContextProvider(searchContextId, {searchSignal, colorDefault: 'white'});

  return <div>
    This is Page 1

    <hr />
    
    <input
      onInput$={(e) => {
        searchSignal.value = (e.target as HTMLInputElement).value;
      }}
    type="text" placeholder="Type your search"/>
    
    <hr />
    
    <Projector/>
      
  </div>
});


export const Projector = component$(() => {

  const {searchSignal, colorDefault} = useContext(searchContextId);

  const color = useSignal(colorDefault);

  useTask$(({track}) => {
    track(() => searchSignal.value);
    if (searchSignal.value === 'llama') {
      color.value = 'red';
      return;
    }else {

      color.value = 'white';
    }
  });
  return <div>You typed: <span style={{backgroundColor: color.value}}>{searchSignal.value}</span></div>;
});