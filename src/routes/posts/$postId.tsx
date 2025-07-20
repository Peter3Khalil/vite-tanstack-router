import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: async ({ params: { postId } }) => {
    // Simulate fetching post data based on postId
    return { postId, title: 'Sample Post' };
  },
});

function RouteComponent() {
  const post = Route.useLoaderData();
  return <div>Hello "/posts/{post.title}"!</div>;
}
