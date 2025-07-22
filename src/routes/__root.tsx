import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadContent />
      <Outlet />
    </div>
  );
}
