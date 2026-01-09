import logo from "@/assets/logo.png";

export const BrandHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-3 px-4 md:px-6 bg-transparent">
      <div className="container">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={logo}
            alt="FaithGoods Jogos de Luz"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};
