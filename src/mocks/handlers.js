import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/reserve/:memberId", ({params}) => {
    const { memberId } = params
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "똑바로",
          petImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.2.02",
          endDate: "2024.2.04",
          totalPrice: "100,000",
        },
        {
          id: 2,
          name: "뭉치",
          petImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.1.20",
          endDate: "2024.1.20",
          totalPrice: "30,000",
        },
        {
          id: 3,
          name: "절미",
          petImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.1.11",
          endDate: "2024.1.12",
          totalPrice: "50,000",
        },
      ]
    });
  }),
  http.post("/api/my-page/petsitter/approve/{bookingId}", async ({ request }) => {
    // const authToken = request.headers.get("Authorization");
    // if (!authToken)
    //   return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        id: 1,
      },
      { status: 201 }
    );
  }),
  // http.get('/favicon.ico', (req, res, ctx) => {
  //   return res(ctx.status(404));
  // }),
  // http.get('https://fonts.gstatic.com/*', (req, res, ctx) => {
  //   // 해당 요청을 무시하고 404 응답을 반환합니다.
  //   return res(ctx.status(404));
  // }),
];