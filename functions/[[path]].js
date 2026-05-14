const gonePaths = new Set([
  "/AdminFeatures",
  "/AdminAll",
  "/AdminContent",
  "/AdminDashboard",
  "/AdminFAQ",
  "/AdminInquiries",
  "/AdminLegal",
  "/AdminPackages",
  "/AdminPortfolio",
  "/AdminProcess",
  "/AdminReviews",
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (gonePaths.has(url.pathname)) {
    return new Response("410 Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  if (url.pathname === "/Widerruf") {
    return Response.redirect(`${url.origin}/widerruf`, 301);
  }

  return context.next();
}