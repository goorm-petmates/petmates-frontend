import { http, HttpResponse } from 'msw';
import { request } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const handlers = [
  // 펫시터 메뉴 목서비스 연결
  // 1.펫시터 게시글 리스트 조회
  http.get(`${BASE_URL}/api/petsitter/list`, () => {
    return HttpResponse.json({
      totalContents: 12,
      pageTotalCnt: 4,
      pageNum: 1,
      data: [
        {
          id: 1,
          nickname: 'John Doe',
          title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다',
          rating: 3,
          reviewCnt: 5,
          services: ['데이케어', '1박케어'],
          roadAddr: '서울시 강남구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: true, //펫시터 카카오 프로필 이미지 사용여부
          // 펫시터 카카오 프로필 이미지url
          profilePath:
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
        {
          id: 2,
          nickname: '이슬기',
          title: '친절, 공감하는 펫시터가 되겠습니다',
          rating: 4,
          reviewCnt: 5,
          services: ['데이케어', '1박케어'],
          roadAddr: '서울시 강동구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: true,
          profilePath:
            'https://images.unsplash.com/photo-1606231106463-ed4596c15292?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwZG9nfGVufDB8fDB8fHww',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
        {
          id: 3,
          nickname: '김수철',
          title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
          rating: 3,
          reviewCnt: 5,
          services: ['데이케어', '1박케어'],
          roadAddr: '서울시 강동구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: true,
          profilePath:
            'https://images.unsplash.com/photo-1557199582-14cd70bc6d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
        {
          id: 4,
          nickname: '김나영',
          title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
          rating: 5,
          reviewCnt: 5,
          services: ['데이케어', '1박케어'],
          roadAddr: '서울시 노원구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: true,
          profilePath:
            'https://images.unsplash.com/photo-1554983488-63c80f49078b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
        {
          id: 5,
          nickname: '박동수',
          title: '2년경력과 펫시터 자격증 보유하였습니다',
          rating: 4,
          reviewCnt: 5,
          services: ['데이케어', '1박케어'],
          roadAddr: '서울시 관악구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: false,
          profilePath:
            'https://plus.unsplash.com/premium_photo-1682092612468-402166855833?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNwbGFzaCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
      ],
    });
  }),

  // 2. 펫시터 검색하기
  http.get(`${BASE_URL}/api/petsitter/search `, () => {
    return HttpResponse.json({
      data: [
        {
          id: 1,
          nickname: 'John Doe',
          title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다',
          rating: 3,
          reviewCnt: 5,
          careType: ['데이케어', '1박케어'],
          roadAddr: '서울시 강남구',
          serviceArea1: '서울시',
          serviceArea2: '강남구',
          standardPrice: '15,000',
          nightPrice: '35,000',
          isKakaoProfile: true, //펫시터 카카오 프로필 이미지 사용여부
          // 펫시터 카카오 프로필 이미지url
          profilePath:
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3',
          // orderByDate: '2024-01-14 15:13:26',
          // createDate: '2024-01-14 15:13:26',
          // modDate: '2024-01-14 15:13:26',
        },
        // {
        //   id: 2,
        //   nickname: '이슬기',
        //   title: '친절, 공감하는 펫시터가 되겠습니다',
        //   rating: 4,
        //   reviewCnt: 5,
        //   careType: ['데이케어', '1박케어'],
        //   roadAddr: '서울시 강동구',
        //   standardPrice: '15,000',
        //   nightPrice: '35,000',
        //   isKakaoProfile: true,
        //   profilePath:
        //     'https://images.unsplash.com/photo-1606231106463-ed4596c15292?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwZG9nfGVufDB8fDB8fHww',
        //   // orderByDate: '2024-01-14 15:13:26',
        //   // createDate: '2024-01-14 15:13:26',
        //   // modDate: '2024-01-14 15:13:26',
        // },
        // {
        //   id: 3,
        //   nickname: '김수철',
        //   title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
        //   rating: '3',
        //   reviewCnt: '5',
        //   careType: ['데이케어', '1박케어'],
        //   roadAddr: '서울시 강동구',
        //   standardPrice: '15,000',
        //   nightPrice: '35,000',
        //   isKakaoProfile: true,
        //   profilePath:
        //     'https://images.unsplash.com/photo-1557199582-14cd70bc6d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //   // orderByDate: '2024-01-14 15:13:26',
        //   // createDate: '2024-01-14 15:13:26',
        //   // modDate: '2024-01-14 15:13:26',
        // },
        // {
        //   id: 4,
        //   nickname: '이슬기',
        //   title: '친절, 공감하는 펫시터가 되겠습니다',
        //   rating: '5',
        //   reviewCnt: '5',
        //   careType: ['데이케어', '1박케어'],
        //   roadAddr: '서울시 노원구',
        //   standardPrice: '15,000',
        //   nightPrice: '35,000',
        //   isKakaoProfile: true,
        //   profilePath:
        //     'https://images.unsplash.com/photo-1554983488-63c80f49078b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
        //   // orderByDate: '2024-01-14 15:13:26',
        //   // createDate: '2024-01-14 15:13:26',
        //   // modDate: '2024-01-14 15:13:26',
        // },
        // {
        //   id: 5,
        //   nickname: '박동수',
        //   title: '2년경력과 펫시터 자격증 보유하였습니다',
        //   rating: '4',
        //   reviewCnt: '5',
        //   careType: ['데이케어', '1박케어'],
        //   roadAddr: '서울시 관악구',
        //   standardPrice: '15,000',
        //   nightPrice: '35,000',
        //   isKakaoProfile: false,
        //   profilePath:
        //     'https://plus.unsplash.com/premium_photo-1682092612468-402166855833?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNwbGFzaCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        //   // orderByDate: '2024-01-14 15:13:26',
        //   // createDate: '2024-01-14 15:13:26',
        //   // modDate: '2024-01-14 15:13:26',
        // },
      ],
    });
  }),

  // 3.펫시터 지원하기 클릭
  http.get(`${BASE_URL}/api/petsitter/apply`, () => {
    return HttpResponse.json({
      status: 'success',
      data: [
        {
          title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          standardPrice: '15,000',
          addPrice: '5,000',
          nightPrice: '35,000',
          photo1:
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3',
          photo2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          photo3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          photo4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          photo5: '',
        },
      ],
    });
  }),

  // 4.펫시터 지원하기 저장
  http.post(`${BASE_URL}/api/petsitter/post`, () => {
    return HttpResponse.json(
      {
        result: 'success',
        message: '지원이 성공적으로 접수되었습니다',
      },
      { status: 200 },
    );
  }),

  // 7.펫시터 지원 게시글 보기
  http.get(`${BASE_URL}/api/petsitter/posting/:id`, async ({ params }) => {
    const { id } = params;
    // Return the mock data
    return HttpResponse.json({
      data: [
        {
          id: 1,
          nickname: 'John Doe',
          title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다',
          viewCnt: 5,
          serviceArea1: '서울시',
          serviceArea2: '강남구',
          createAt: '2024.01.14',
          profilePic1:
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3',
          profilePic2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          profilePic3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic5: '',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          latitude: 37.49944606415477,
          longitude: 127.02753711911222,
          standardPrice: '15,000',
          nightPrice: '35,000',
          addPrice: '5,000',
          reviewCnt: 4,
          averageRating: 4,
        },
        {
          id: 2,
          nickname: '이슬기',
          title: '친절, 공감하는 펫시터가 되겠습니다',
          viewCnt: 5,
          serviceArea1: '서울시',
          serviceArea2: '강동구',
          createAt: '2024.01.14',
          profilePic1:
            'https://images.unsplash.com/photo-1606231106463-ed4596c15292?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwZG9nfGVufDB8fDB8fHww',
          profilePic2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          profilePic3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic5: '',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          latitude: 37.551851722025724,
          longitude: 127.14573760885442,
          standardPrice: '15,000',
          nightPrice: '35,000',
          addPrice: '5,000',
          reviewCnt: 4,
          averageRating: 4,
        },
        {
          id: 3,
          nickname: '김수철',
          title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
          viewCnt: 5,
          serviceArea1: '서울시',
          serviceArea2: '관악구',
          createAt: '2024.01.14',
          profilePic1:
            'https://images.unsplash.com/photo-1557199582-14cd70bc6d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          profilePic2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          profilePic3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic5: '',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          latitude: 37.47827553846833,
          longitude: 126.95372582219238,
          standardPrice: '15,000',
          nightPrice: '35,000',
          addPrice: '5,000',
          reviewCnt: 4,
          averageRating: 4,
        },
        {
          id: 4,
          nickname: '김나영',
          title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
          viewCnt: 5,
          serviceArea1: '서울시',
          serviceArea2: '노원구',
          createAt: '2024.01.14',
          profilePic1:
            'https://images.unsplash.com/photo-1554983488-63c80f49078b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
          profilePic2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          profilePic3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic5: '',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          latitude: 37.56368160371114,
          longitude: 126.99647992118182,
          standardPrice: '15,000',
          nightPrice: '35,000',
          addPrice: '5,000',
          reviewCnt: 4,
          averageRating: 4,
        },
        {
          id: 5,
          nickname: '박동수',
          title: '2년경력과 펫시터 자격증 보유하였습니다',
          viewCnt: 5,
          serviceArea1: '서울시',
          serviceArea2: '관악구',
          createAt: '2024.01.14',
          profilePic1: '',
          profilePic2:
            'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
          profilePic3:
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic4:
            'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
          profilePic5: '',
          contents:
            '돌봄 경험 2년있으며 펫시터 자격증 보유하였습니다. 집중케어 친절한펫시터!!돌봄 경험 많습니다!!쾌적한 환경 속에서 내 강아지처럼 케어하겠습니다.',
          latitude: 37.56368160371114,
          longitude: 126.99647992118182,
          standardPrice: '15,000',
          nightPrice: '35,000',
          addPrice: '5,000',
          reviewCnt: 4,
          averageRating: 4,
        },
      ],
    });
  }),

  // 8.펫시터 리뷰 보기
  http.get(`${BASE_URL}/api/petsitter/reviews/:petsitterId`, async ({ params }) => {
    const { petsitterId } = params;
    // Return the mock data
    return HttpResponse.json({
      result: 'success',
      totalContents: 4, // 게시글 전체개수
      pageTotalCnt: 6, // 총 페이지 숫자?
      pageNum: 3, // 현재 페이지 숫자
      data: [
        {
          reviewId: 101,
          // reviewCnt: 4,
          // averageRating: 4,
          reviewPic:
            'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHB5fGVufDB8fDB8fHww',
          reviewNickname: '초코비',
          reviewCreateAt: '2024-01-14',
          reviewRating: 3,
          reviewContents:
            '하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
        },

        {
          reviewId: 103,
          // reviewCnt: 4,
          // averageRating: 4,
          reviewPic:
            'https://plus.unsplash.com/premium_photo-1676479611661-1ca58aa109b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cHB5fGVufDB8fDB8fHww',
          reviewNickname: '까눌레',
          reviewCreateAt: '2024-01-14',
          reviewRating: 4,
          reviewContents:
            '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ 케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
        },
        {
          reviewId: 104,
          // reviewCnt: 4,
          // averageRating: 4,
          reviewPic:
            'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHB1cHB5fGVufDB8fDB8fHww',
          reviewNickname: '크로플',
          reviewCreateAt: '2024-01-14',
          reviewRating: 4,
          reviewContents: '다음에 또 맡기고 싶어요 ㅎㅎ',
        },
        {
          reviewId: 102,
          // reviewCnt: 4,
          // averageRating: 4,
          reviewPic:
            'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fHww',
          reviewNickname: '비누',
          reviewCreateAt: '2024-01-14',
          reviewRating: 4,
          reviewContents:
            '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ 케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
        },
      ],
    });
  }),
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  // 실제로 펫 정보 받아오기 없음. 임시로
  http.get('/api/petinfo/:memberId', ({ params }) => {
    const { memberId } = params;
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: '똑바로',
          petImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
        },
        {
          id: 2,
          name: '뭉치',
          petImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.20',
          endDate: '2024.1.20',
          totalPrice: '30,000',
        },
        // {
        //   id: 3,
        //   name: "절미",
        //   petImgSrc: "/imgs/dog3.jpeg",
        //   startDate: "2024.1.11",
        //   endDate: "2024.1.12",
        //   totalPrice: "50,000",
        // },
      ],
    });
  }),
  http.post('/api/my-page/pet/add', async ({ request }) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);

    return HttpResponse.json(
      {
        result: 'success',
        data: {
          id: 1,
        },
      },
      { status: 200 },
    );
  }),
  http.post('/api/my-page/pet/:petId/photo', async ({ params }) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { petId } = params;
    return HttpResponse.json(
      {
        result: 'success',
        data: {
          storedFileName: "저장된 물리 파일명",
        },
      },
      { status: 200 },
    );
  }),
  http.get('/api/reserve/:memberId', ({ params }) => {
    const { memberId } = params;
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: '똑바로',
          reservePetImgSrc: '/imgs/dog1.png',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
          state: '승인대기',
        },
        {
          id: 2,
          name: '뭉치',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.20',
          endDate: '2024.1.20',
          totalPrice: '30,000',
          state: '예약완료',
        },
        {
          id: 3,
          name: '절미',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.11',
          endDate: '2024.1.12',
          totalPrice: '50,000',
          state: '예약완료',
        },
      ],
    });
  }),
  http.put('/api/reserve/cancel', async () => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    return HttpResponse.json(
      {
        result: 'success',
        data: {
          state: '취소완료',
        },
      },
      { status: 200 },
    );
  }),
  http.post('/api/my-page/review/:petsitterId', async ({ params }) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { petsitterId } = params;

    return HttpResponse.json(
      {
        result: 'success',
        data: {
          state: '작성완료',
        },
      },
      { status: 200 },
    );
  }),
  http.get('/api/my-page/petsitter/:petId', ({ params }) => {
    const { petId } = params;
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: '똑바로',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          state: '취소완료',
          breed: '푸들',
          sex: 'F',
          birth: '2013',
          weight: '5',
        },
        {
          id: 2,
          name: '뭉치',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          state: '취소완료',
          breed: '골든리트리버',
          sex: 'M',
          birth: '2019',
          weight: '20',
        },
        {
          id: 3,
          name: '절미',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          state: '취소완료',
          breed: '웰시코기',
          sex: 'F',
          birth: '2020',
          weight: '9',
        },
      ],
    });
  }),
  http.get('/api/petsitter/reviews', () => {
    return HttpResponse.json({
      data: [
        {
          id: 1,
          reviewRating: '',
          reviewPic: '/imgs/dog3.jpeg',
          reviewNickname: '리뷰A',
          reviewCreateAt: '',
          reviewContents: '',
          state: '후기작성',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
        },
        {
          id: 2,
          reviewRating: '',
          reviewPic: '/imgs/dog3.jpeg',
          reviewNickname: '리뷰B',
          reviewCreateAt: '',
          reviewContents: '',
          state: '후기작성',
          startDate: '2024.1.20',
          endDate: '2024.1.20',
          totalPrice: '30,000',
        },
        {
          id: 3,
          reviewRating: 2,
          reviewPic: '/imgs/dog3.jpeg',
          reviewNickname: '리뷰C',
          reviewCreateAt: '2024-01-14',
          reviewContents: '친절해요',
          state: '작성완료',
          startDate: '2024.1.11',
          endDate: '2024.1.12',
          totalPrice: '50,000',
        },
      ],
    });
  }),
  http.get('/api/my-page/petsitter/cancel/:petsitterId', ({ params }) => {
    const { petsitterId } = params;
    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: '똑바로',
          reservePetImgSrc: '/imgs/dog1.png',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
          state: '취소완료',
        },
        {
          id: 2,
          name: '뭉치',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.20',
          endDate: '2024.1.20',
          totalPrice: '30,000',
          state: '취소완료',
        },
        {
          id: 3,
          name: '절미',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.11',
          endDate: '2024.1.12',
          totalPrice: '50,000',
          state: '취소완료',
        },
      ],
    });
  }),
  http.get('/api/my-page/petsitter/existence/:memberId', async ({ params }) => {
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { memberId } = params;

    return HttpResponse.json({
      exist: true,
      petsitterId: 1,
      data: [
        {
          id: 1,
          title: '돌봄 경험 2년 있으며 펫시터 자격증 보유하였습니다.',
          profilePath:
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW58ZW58MHx8MHx8fDA%3D',
          nickname: 'JY',
        },
      ],
    });
  }),
  http.get('/api/my-page/petsitter/reserve/:petsitterId', async ({ params }) => {
    const { petsitterId } = params;

    return HttpResponse.json({
      data: [
        {
          id: 1,
          name: '똑바로',
          reservePetImgSrc: '/imgs/dog1.png',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
          state: '예약승인',
        },
        {
          id: 2,
          name: '뭉치',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.20',
          endDate: '2024.1.20',
          totalPrice: '30,000',
          state: '예약승인',
        },
        {
          id: 3,
          name: '절미',
          reservePetImgSrc: '/imgs/dog3.jpeg',
          startDate: '2024.1.11',
          endDate: '2024.1.12',
          totalPrice: '50,000',
          state: '예약완료',
        },
      ],
    });
  }),
  http.post('/api/my-page/petsitter/approve/:bookingId', async ({ params }) => {
    // const authToken = request.headers.get("Authorization");
    // if (!authToken)
    //   return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { bookingId } = params;

    return HttpResponse.json(
      {
        result: 'success',
        data: {
          state: '예약완료',
        },
      },
      { status: 200 },
    );
  }),
  http.post('/api/my-page/petsitter/refuse/:bookingId', async ({ params }) => {
    // const authToken = request.headers.get("Authorization");
    // if (!authToken)
    //   return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    // const requestBody = await request.json();
    // console.log('req body: ', requestBody);
    const { bookingId } = params;

    return HttpResponse.json(
      {
        result: 'success',
        data: {
          state: '취소완료',
        },
      },
      { status: 200 },
    );
  }),
  http.get('/api/reserve/check/:bookingId', async ({ params }) => {
    const { bookingId } = params;

    return HttpResponse.json({
      data: [
        {
          id: 1,
          createDate: '2024.2.01',
          startTime: '17:34',
          endTime: '10:00',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
        },
        {
          id: 2,
          createDate: '2024.2.01',
          startTime: '17:34',
          endTime: '10:00',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
        },
        {
          id: 3,
          createDate: '2024.2.01',
          startTime: '17:34',
          endTime: '10:00',
          startDate: '2024.2.02',
          endDate: '2024.2.04',
          totalPrice: '100,000',
        },
      ],
    });
  }),
];
