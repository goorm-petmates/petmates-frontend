import { http, HttpResponse } from "msw";
import { request } from 'axios';

export const handlers = [
  // 실제로 펫 정보 받아오기 없음. 임시로
  http.get("/api/petinfo/:memberId", ({params}) => {
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
  http.post("/api/my-page/pet/add", async ({request}) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);

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
  http.get("/api/reserve/:memberId", ({params}) => {
    const { memberId } = params;
    return HttpResponse.json({
        data: [
          {
            id: 1,
            name: "똑바로",
            reservePetImgSrc: "/imgs/dog1.png",
            startDate: "2024.2.02",
            endDate: "2024.2.04",
            totalPrice: "100,000",
            state: "승인대기",
          },
          {
            id: 2,
            name: "뭉치",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            startDate: "2024.1.20",
            endDate: "2024.1.20",
            totalPrice: "30,000",
            state: "예약완료",
          },
        {
          id: 3,
          name: "절미",
          reservePetImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.1.11",
          endDate: "2024.1.12",
          totalPrice: "50,000",
          state: "예약완료",
        },
        ]
      }
    );
  }),
  http.put("/api/reserve/cancel", async () => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    return HttpResponse.json(
      {
        result: "success",
        data: {
          state: "취소완료"
        }
      },
      { status: 200 }
    );
  }),
  http.post("/api/my-page/review/:petsitterId", async ({params}) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { petsitterId } = params;

    return HttpResponse.json(
      {
        result: "success",
        data: {
          state: "작성완료"
        }
      },
      { status: 200 }
    );
  }),
  http.get("/api/my-page/petsitter/:petId", ({params}) => {
    const { petId } = params;
    return HttpResponse.json({
        data: [
          {
            id: 1,
            name: "똑바로",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            state: "취소완료",
            breed: "푸들",
            sex: "F",
            birth: "2013",
            weight: '5',
          },
          {
            id: 2,
            name: "뭉치",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            state: "취소완료",
            breed: "골든리트리버",
            sex: "M",
            birth: "2019",
            weight: '20',
          },
          {
            id: 3,
            name: "절미",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            state: "취소완료",
            breed: "웰시코기",
            sex: "F",
            birth: "2020",
            weight: '9',
          },
        ]
      }
    );
  }),
  http.get("/api/petsitter/reviews", () => {
    return HttpResponse.json({
        data: [
          {
            id: 1,
            reviewRating: "",
            reviewPic: "/imgs/dog3.jpeg",
            reviewNickname: "리뷰A",
            reviewCreateAt: "",
            reviewContents: "",
            state: "후기작성",
            startDate: "2024.2.02",
            endDate: "2024.2.04",
            totalPrice: "100,000",
          },
          {
            id: 2,
            reviewRating: "",
            reviewPic: "/imgs/dog3.jpeg",
            reviewNickname: "리뷰B",
            reviewCreateAt: "",
            reviewContents: "",
            state: "후기작성",
            startDate: "2024.1.20",
            endDate: "2024.1.20",
            totalPrice: "30,000",
          },
          {
            id: 3,
            reviewRating: 2,
            reviewPic: "/imgs/dog3.jpeg",
            reviewNickname: "리뷰C",
            reviewCreateAt: "2024-01-14",
            reviewContents: "친절해요",
            state: "작성완료",
            startDate: "2024.1.11",
            endDate: "2024.1.12",
            totalPrice: "50,000",
          },
        ]
      }
    );
  }),
  http.get("/api/my-page/petsitter/cancel/:petsitterId", ({params}) => {
    const { petsitterId } = params;
    return HttpResponse.json({
        data: [
          {
            id: 1,
            name: "똑바로",
            reservePetImgSrc: "/imgs/dog1.png",
            startDate: "2024.2.02",
            endDate: "2024.2.04",
            totalPrice: "100,000",
            state: "취소완료",
          },
          {
            id: 2,
            name: "뭉치",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            startDate: "2024.1.20",
            endDate: "2024.1.20",
            totalPrice: "30,000",
            state: "취소완료",
          },
          {
            id: 3,
            name: "절미",
            reservePetImgSrc: "/imgs/dog3.jpeg",
            startDate: "2024.1.11",
            endDate: "2024.1.12",
            totalPrice: "50,000",
            state: "취소완료",
          },
        ]
      }
    );
  }),
  http.get("/api/my-page/petsitter/existence/:memberId", async ({params}) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { memberId } = params;

    return HttpResponse.json({
      exist: true,
      petsitterId: 1,
      data: [
        {
          id: 1,
          title: "돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.",
          profilePath: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3D",
          nickname: "JY",
        },
      ]
    })
  }),
  http.get("/api/my-page/petsitter/reserve/:petsitterId",async ({params}) => {
    const { petsitterId } = params;

    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: "똑바로",
          reservePetImgSrc: "/imgs/dog1.png",
          startDate: "2024.2.02",
          endDate: "2024.2.04",
          totalPrice: "100,000",
          state: "예약승인",
        },
        {
          id: 2,
          name: "뭉치",
          reservePetImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.1.20",
          endDate: "2024.1.20",
          totalPrice: "30,000",
          state: "예약승인",
        },
        {
          id: 3,
          name: "절미",
          reservePetImgSrc: "/imgs/dog3.jpeg",
          startDate: "2024.1.11",
          endDate: "2024.1.12",
          totalPrice: "50,000",
          state: "예약완료",
        },
      ]
    })
  }),
  http.post("/api/my-page/petsitter/approve/:bookingId", async ({params}) => {
    // const authToken = request.headers.get("Authorization");
    // if (!authToken)
    //   return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { bookingId } = params;

    return HttpResponse.json(
      {
        result: "success",
        data: {
          state: "예약완료"
        }
      },
      { status: 200 }
    );
  }),
];