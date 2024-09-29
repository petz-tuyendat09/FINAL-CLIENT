import Logo from "./Logo";
import Navigation from "./SiteLink/SiteLink";

export default function Header() {
  return (
    <header className="absolute left-8 top-8">
      <Logo />
      <Navigation />
    </header>
  );
}
