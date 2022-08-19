import useStore from '../hooks/useStore';

function Button() {
  const [state, setState] = useStore('count');
  return (
    <button onClick={() => setState((count) => count + 1)}>
      count is {state}
    </button>
  );
}

export default Button;
