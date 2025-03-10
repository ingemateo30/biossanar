import './globals.css';

export const metadata = {
  title: 'Instituto de Salud',
  description: 'Formación profesional en el área de la salud - Auxiliar de enfermería, Auxiliar oral y más',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
