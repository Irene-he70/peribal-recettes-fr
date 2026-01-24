
import { useState } from 'react';
import { Menu, X, Download, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShoppingListModal from './ShoppingListModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-muted shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="PERIBAL" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                PERIBAL
              </h1>
              <p className="text-xs text-muted-foreground">Frühstücksrezepte</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsShoppingListOpen(true)}
              className="gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Einkaufsliste
            </Button>
            <a
              href="/peribal_suess_rezepte.pdf"
              download
              className="inline-flex items-center gap-2"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                PDF (Süß)
              </Button>
            </a>
            <a
              href="/peribal_herzhaft_rezepte.pdf"
              download
              className="inline-flex items-center gap-2"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                PDF (Herzhaft)
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-muted bg-background p-4 space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => {
                setIsShoppingListOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <ShoppingCart className="h-4 w-4" />
              Einkaufsliste
            </Button>
            <a href="/peribal_suess_rezepte.pdf" download className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                PDF (Süß)
              </Button>
            </a>
            <a href="/peribal_herzhaft_rezepte.pdf" download className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                PDF (Herzhaft)
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* Shopping List Modal */}
      <ShoppingListModal
        isOpen={isShoppingListOpen}
        onClose={() => setIsShoppingListOpen(false)}
      />
    </>
  );
}
