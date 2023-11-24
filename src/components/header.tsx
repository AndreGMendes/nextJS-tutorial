import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10 hover:text-emerald-400">
      <nav className="container relative flex flex-wrap item-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl flex items-end">
          <Link href="/performance" className="text-2xl font-bold text-indigo-500/100 hover:text-emerald-400">Performance</Link>
          <Link href="/reliability" className="text-2xl font-bold text-indigo-500/100 hover:text-emerald-400">Reliability</Link>
          <Link href="/scale" className="text-2xl font-bold text-indigo-500/100 hover:text-emerald-400">Scale</Link>
        </div>
      </nav>
    </div>
  );
};


export default Header;
