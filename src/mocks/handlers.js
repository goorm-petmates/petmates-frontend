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
        // {
        //   id: 3,
        //   name: "절미",
        //   petImgSrc: "/imgs/dog3.jpeg",
        //   startDate: "2024.1.11",
        //   endDate: "2024.1.12",
        //   totalPrice: "50,000",
        // },
      ]
    });
  }),
  http.post("/api/my-page/petsitter/approve/{bookingId}", async ({ request }) => {
    // const authToken = request.headers.get("Authorization");
    // if (!authToken)
    //   return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    const requestBody = await request.json();
    console.log('req body: ', requestBody);

    return HttpResponse.json(
      {
        id: 1,
      },
      { status: 200 }
    );
  }),
  http.post("/api/my-page/pet/add", async ({request}) => {
    const requestBody = await request.json();
    console.log('req body: ', requestBody);

    return HttpResponse.json(
      {
        result: "success",
        data: {
          id: 1,
        }
      },
      { status: 200 }
    );
  }),
];