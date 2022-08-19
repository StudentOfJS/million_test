import useStore from '../hooks/useStore';

function ResetButton() {
  const [_, setState] = useStore('count');
  return (
    <button
      className="reset"
      onClick={() => {
        setState(0);
      }}
    >
      Reset
    </button>
  );
}

export default ResetButton;
