type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'white' | 'black';
};

export function Button({ children, className, variant = 'white', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-2 rounded-full border transition-colors duration-200 font-bold";
  
  const variants = {
    white: "bg-white text-black border-black/10 hover:bg-gray-100",
    black: "bg-black text-white border-black hover:bg-zinc-900"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}