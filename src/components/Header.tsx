import Register from "./registerDialog/Register";

export default function Header() {
  return (
    <header className="bg-black text-white flex justify-between p-6 sticky top-0 z-50 ">
      <h1 className="text-2xl font-semibold">Sindhu Products and Services</h1>
      <Register>
        <button className="bg-white text-black py-3 px-8 font-[600] cursor-pointer rounded-md">
          Register
        </button>
      </Register>
    </header>
  );
}
