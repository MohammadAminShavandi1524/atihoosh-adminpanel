"use client";

interface LoginBackgroundProps {}

const auroras = [
  {
    className:
      "-left-[180px] -top-[120px] h-[650px] w-[650px] bg-[rgba(32,178,170,0.10)] dark:bg-[rgba(32,178,170,0.14)]",
    delay: "",
  },
  {
    className:
      "-right-[220px] top-[20%] h-[700px] w-[700px] bg-[rgba(6,182,212,0.10)] dark:bg-[rgba(6,182,212,0.14)]",
    delay: "[animation-delay:-8s]",
  },
  {
    className:
      "bottom-[-220px] left-[35%] h-[650px] w-[650px] bg-[rgba(20,184,166,0.10)] dark:bg-[rgba(20,184,166,0.14)]",
    delay: "[animation-delay:-14s]",
  },
];

const LoginBackground = ({}: LoginBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-transparent">
      {auroras.map(({ className, delay }, index) => (
        <div
          key={index}
          className={`animate-aurora absolute rounded-full blur-3xl ${className} ${delay}`}
        />
      ))}

      {/* Light Mode Glow (lighter) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,170,0.06),transparent_55%)] dark:hidden" />

      {/* Dark Mode Vignette (lighter) */}
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.55)_100%)] dark:block" />
    </div>
  );
};

export default LoginBackground;