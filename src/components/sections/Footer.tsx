import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2024 Kit Premium Jogos de Luz</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>para famílias cristãs</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
