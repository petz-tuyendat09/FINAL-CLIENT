import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-8 z-50 mx-auto mb-8 flex w-fit gap-4 rounded-full bg-primary px-8 py-4">
      <Logo />
      <Navigation />
    </header>
  );
}
