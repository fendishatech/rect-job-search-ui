const links = [
  {
    id: 1,
    title: "Jobs",
  },
  {
    id: 2,
    title: "Components",
  },
  {
    id: 3,
    title: "About",
  },
  {
    id: 4,
    title: "Contact",
  },
  {
    id: 5,
    title: "Blog",
  },
  {
    id: 6,
    title: "Login",
  },
  {
    id: 7,
    title: "Register",
  },
];
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-[3rem]">
      {/* Logo */}
      <div className="">
        <h1 className="text-[25px] text-blueColor">
          <strong>Hello</strong>Logo
        </h1>
      </div>
      {/* Menu */}
      <div className="flex gap-8 ">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-[#6f6f6] hover:text-blueColor list-none relative cursor-pointer"
          >
            {link.title}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
