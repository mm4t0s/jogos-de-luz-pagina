import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 gradient-dark relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-sm text-gray-400">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Cookies
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Reembolso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 Kit Premium Jogos de Luz® Todos os direitos reservados.
            </p>
            <p className="flex items-center justify-center gap-2 mt-2">
              Desenvolvido com <Heart className="w-4 h-4 text-primary fill-primary" /> para famílias cristãs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};