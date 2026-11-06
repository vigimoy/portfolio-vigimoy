"use client";

import Image from "next/image";
import { useRef } from "react";
import { animate, motion, useMotionValue, type PanInfo } from "framer-motion";

const settle = { type: "spring", stiffness: 200, damping: 15, mass: 0.85 } as const;
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function HeroBadge() {
  const anchor = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const stretch = useMotionValue(1);
  const gesture = useRef({ angle: 0, scale: 1, lever: 1, left: 0, right: 0 });
  const dragged = useRef(false);

  function beginPull(clientY: number) {
    const box = anchor.current!.getBoundingClientRect();
    rotation.stop();
    stretch.stop();
    dragged.current = false;
    // Limit the swing by the room between the resting card and the viewport.
    const limit = (space: number) =>
      Math.min(12, Math.atan2(Math.max(0, space - 4), box.height * 1.025) * 180 / Math.PI);
    gesture.current = {
      angle: rotation.get(), scale: stretch.get(),
      lever: Math.max(box.height * 0.45, clientY - box.top),
      left: limit(box.left), right: limit(document.documentElement.clientWidth - box.right),
    };
  }

  function pull(_: PointerEvent, { offset }: PanInfo) {
    dragged.current = true;
    const { angle, scale, lever, left, right } = gesture.current;
    rotation.set(clamp(angle - Math.atan2(offset.x, lever) * 180 / Math.PI, -right, left));
    stretch.set(clamp(scale + offset.y / (lever * 4), 0.99, 1.025));
  }

  function release() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rotation.jump(0);
      stretch.jump(1);
    } else {
      animate(rotation, 0, settle);
      animate(stretch, 1, settle);
    }
  }

  function nudge() {
    if (dragged.current) return;
    // A tap, Enter, or Space can also set the badge in motion.
    const room = gesture.current;
    const angle = room.left >= room.right ? Math.min(5, room.left) : -Math.min(5, room.right);
    rotation.jump(angle);
    release();
  }

  return (
    <div className="badge" ref={anchor}>
      <motion.button
        type="button"
        className="badge-swing"
        aria-label="Swing Muhamad Rizqi Akbar’s profile badge"
        title="Drag or tap the badge"
        style={{ rotate: rotation, scaleY: stretch }}
        onPointerDown={(event) => beginPull(event.clientY)}
        onPan={pull}
        onPanEnd={release}
        onPointerCancel={release}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            const box = anchor.current!.getBoundingClientRect();
            beginPull(box.bottom);
          }
        }}
        onClick={nudge}
      >
        <span className="badge-base">
          <Image src="/assets/9d9de.png" alt="" width={1024} height={1536} priority draggable={false} />
        </span>
        <span className="badge-identity">
          <span>FRONT-END DEVELOPER</span>
          <strong>Muhamad<br />Rizqi Akbar<span>.</span></strong>
        </span>
        <span className="badge-photo" aria-hidden="true">
          <svg viewBox="0 0 120 120" focusable="false">
            <circle cx="60" cy="60" r="60" fill="#9eafb3" />
            <circle cx="60" cy="44" r="20" fill="#f5f8f8" />
            <path d="M22 92c4-17 19-26 38-26s34 9 38 26a49 49 0 0 1-76 0Z" fill="#f5f8f8" />
          </svg>
        </span>
      </motion.button>
    </div>
  );
}
