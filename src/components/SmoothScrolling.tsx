import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.15, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
