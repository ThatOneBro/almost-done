import { useRef, useEffect } from "react";

export function usePrevious<T>(val: T): T | null {
  const prevRef = useRef<{ val: T; prev: T | null }>({
    val,
    prev: null,
  });

  const current = prevRef.current.val;
  if (val !== current) {
    prevRef.current = {
      val,
      prev: current,
    };
  }

  return prevRef.current.prev;
}
