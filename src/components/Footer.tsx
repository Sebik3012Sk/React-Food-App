import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center content-center h-max w-full bg-red-800">
      <p className="text-white text-xl m-5">&copy; Sebastian Kučera 2023</p>
      {/* <a className="mt-[-5px]" href="tel:+420778563595">
            <span className="text-white text-lg">
                Kontakt na mě
            </span>
        </a> */}
    </footer>
  );
};

export default Footer;
