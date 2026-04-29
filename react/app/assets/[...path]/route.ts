type AssetRouteContext = {
  params: Promise<{
    path?: string[];
  }>;
};

export async function GET(_request: Request, context: AssetRouteContext) {
  const { path = [] } = await context.params;

  if (!path.length || path.some((segment) => segment === "." || segment === "..")) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(null, {
    headers: {
      "x-vinext-static-file": `/assets/${path.map(encodeURIComponent).join("/")}`,
    },
  });
}
