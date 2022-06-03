export const Header = (props: any) => {
  return (
    <nav className="w-full max-h-[60px] flex p-4 bg-yellow-200 rounded-lg">
      <div className="flex">
        <ul className="flex gap-x-4 items-center">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};
