type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-white text-black px-8 py-2 rounded-full border border-black/10 hover:bg-gray-100 transition-colors duration-200 font-bold
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
