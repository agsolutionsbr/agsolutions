import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AG Solutions — Soluções inteligentes. Resultados reais." },
      { name: "description", content: "Sites profissionais, automações inteligentes e sistemas sob medida para empresas que querem vender mais e crescer com estrutura." },
      { name: "author", content: "AG Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AG Solutions — Soluções inteligentes. Resultados reais." },
      { name: "twitter:title", content: "AG Solutions — Soluções inteligentes. Resultados reais." },
      { property: "og:description", content: "Sites profissionais, automações inteligentes e sistemas sob medida para empresas que querem vender mais e crescer com estrutura." },
      { name: "twitter:description", content: "Sites profissionais, automações inteligentes e sistemas sob medida para empresas que querem vender mais e crescer com estrutura." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00b7e3b8-9fe1-40b9-8a6c-dd5f963a40a4/id-preview-474d0287--290b232a-958e-43fc-9458-13e3c61a9fed.lovable.app-1777058708004.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00b7e3b8-9fe1-40b9-8a6c-dd5f963a40a4/id-preview-474d0287--290b232a-958e-43fc-9458-13e3c61a9fed.lovable.app-1777058708004.png" },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
