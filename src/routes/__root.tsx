import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeadContent />
      <Outlet />
    </div>
  );
}
