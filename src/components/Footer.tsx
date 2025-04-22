import Logo from "../assets/icons/Logo";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-slate-400 mt-32 py-16">
      <div className="flex flex-col items-center gap-4">
        <Logo fill="white" className="w-30" />
        <p className="text-sm text-white">© 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
