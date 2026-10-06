export default function MathRenderer({
  children,
  block = false,
  className = "",
}) {
  if (block) {
    return (
      <div
        className={`my-6 overflow-x-auto rounded-2xl border border-base-300 bg-base-200/60 px-5 py-7 text-center ${className}`}
      >
        <div className="min-w-max font-serif text-xl leading-relaxed tracking-wide sm:text-2xl">
          {children}
        </div>
      </div>
    );
  }

  return (
    <span className={`font-serif text-lg tracking-wide ${className}`}>
      {children}
    </span>
  );
}
