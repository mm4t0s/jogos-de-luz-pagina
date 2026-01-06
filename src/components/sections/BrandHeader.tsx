import logo from "@/assets/logo.png";

export const BrandHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-2 px-4 md:px-6">
      <div className="container">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={logo}
            alt="FaithGoods Jogos de Luz"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};
