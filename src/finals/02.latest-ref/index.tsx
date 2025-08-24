import { useMemo, useState } from "react";

function debounce<Callback extends (...args: Array<unknown>) => void>(
  fn: Callback,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  console.log("Debounce function created with delay:");
  return (...args: Parameters<Callback>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function useDebounce<Callback extends (...args: Array<unknown>) => unknown>(
  callback: Callback,
  delay: number
) {
  return useMemo(() => debounce(callback, delay), [callback, delay]);
}

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Incrementing count by:", step);
    return setCount((c) => c + step);
  };
  const debouncedIncrement = useDebounce(increment, 3000);

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 w-full max-w-md">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Step:
          </label>
          <input
            type="number"
            step="1"
            min="1"
            max="10"
            onChange={(e) => setStep(Number(e.currentTarget.value))}
            defaultValue={step}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={debouncedIncrement}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
