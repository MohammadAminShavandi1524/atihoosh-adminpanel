import * as React from "react";

import { cn } from "@/lib/utils";

import { CustomButton } from "./custom-button";

import type { CustomHoldButtonProps } from "./custom-button.types";
import { useHold } from "./use-hold-button";

const CustomHoldButton = React.forwardRef<
  HTMLButtonElement,
  CustomHoldButtonProps
>(
  (
    {
      children,

      duration = 1200,

      onComplete,

      onHoldStart,

      onHoldEnd,

      onCancel,

      successContent,

      autoReset = true,

      resetOnLeave = true,

      overlayClassName,

      className,

      ...props
    },

    ref,
  ) => {
    const {
      progress,

      loading,

      completed,

      start,

      stop,

      reset,
    } = useHold({
      duration,

      onComplete,

      onHoldStart,

      onHoldEnd,

      onCancel,

      autoReset,
    });

    const handlePointerDown = (event: React.PointerEvent) => {
      event.currentTarget.setPointerCapture(event.pointerId);

      start();
    };

    const handlePointerUp = () => {
      stop();
    };

    const handlePointerLeave = () => {
      if (resetOnLeave) {
        stop();
      }
    };

    return (
      <CustomButton
        ref={ref}

        className={cn("relative", className)}

        loading={loading}

        {...props}

        onPointerDown={handlePointerDown}

        onPointerUp={handlePointerUp}

        onPointerCancel={stop}

        onPointerLeave={resetOnLeave ? handlePointerLeave : undefined}
      >
        {/* Fill Overlay */}

        <span
          aria-hidden

          className={cn(
            `pointer-events-none absolute inset-y-0 start-0 origin-left bg-current opacity-20 transition-[transform] duration-75 rtl:origin-right`,

            overlayClassName,
          )}

          style={{
            transform: `scaleX(${progress / 100})`,
          }}
        />

        <span className="relative z-10">
          {completed && successContent ? successContent : children}
        </span>
      </CustomButton>
    );
  },
);

CustomHoldButton.displayName = "CustomHoldButton";

export { CustomHoldButton };
