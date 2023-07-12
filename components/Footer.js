const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-4 font-cabinet">
      <div className="container px-10  text-slate-200 text-center">
      <div className = "bg-slate-200 h-[1.5px] w-full m-1"/>
        <p>  {new Date().getFullYear()} • Designed and Developed by <span className="text-teal-200">Alefiya Abbas.</span> </p>
      </div>
    </footer>
  );
};

export default Footer;
