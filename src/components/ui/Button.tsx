interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  additionClass?: string;
}

export default function Button({
  children,
  additionClass,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${additionClass} button-color flex items-center rounded-full px-8 py-2 font-sans font-[400] text-white transition-all delay-75 duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}
