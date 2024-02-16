//공동컴포넌트 PetSitterList 더미데이터
const PetSittersData = [
  {
    id: 1,
    nickname: '김세정',
    title: '쾌적하고 따뜻한 분위기에서 제 반려견처럼 케어합니다.',
    rating: '⭐️⭐️⭐️⭐️',
    // count: '2',
    reviewCnt: 3,
    address: '서울시 판교역',
    createAt: '2024.01.14',
    viewCnt: 10,
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
    latitude: 37.49944606415477,
    longitude: 127.02753711911222,

    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1611003229186-80e40cd54966?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxwdXBweXxlbnwwfHwwfHx8MA%3D%3D',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwdXBweXxlbnwwfHwwfHx8MA%3D%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
      {
        id: 103,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '바닐라',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '다음에 또 맡길게요 ㅎㅎ ',
      },
    ],

    standardPrice: '15,000',
    addPrice: '3,000',
    nightPrice: '35,000',
    services: ['데이케어', '1박케어'],
  },
  {
    id: 2,
    nickname: '이슬기',
    title: '친절, 공감하는 펫시터가 되겠습니다',
    rating: '⭐️⭐️⭐️',
    // count: '2',
    address: '서울시 노원구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1554983488-63c80f49078b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.65431260045348,
    longitude: 127.06444692283631,
    reviewCnt: 3,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1676479611661-1ca58aa109b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! ',
      },
      {
        id: 103,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '까눌레',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ 케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
    services: ['데이케어', '1박케어'],
  },
  {
    id: 3,
    nickname: '김수철',
    title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
    rating: '⭐️⭐️⭐️⭐️',
    // count: '3',
    address: '서울시 관악구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1557199582-14cd70bc6d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.47827553846833,
    longitude: 126.95372582219238,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1537151769678-eb003fb3a153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
    services: ['데이케어', '1박케어'],
  },
  {
    id: 4,
    nickname: '이광수',
    title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다.',
    rating: '⭐️⭐️⭐️',
    // count: '3',
    address: '서울시 중구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://plus.unsplash.com/premium_photo-1664303671218-4de3a26fb1c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXNpYW4lMjBndXklMjBzbWlsZXxlbnwwfHwwfHx8MA%3D%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.56368160371114,
    longitude: 126.99647992118182,
    reviewCnt: 4,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1676479611661-1ca58aa109b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! ',
      },
      {
        id: 103,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '까눌레',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ 케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 104,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '크로플',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '다음에 또 맡기고 싶어요 ㅎㅎ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
    services: ['데이케어', '1박케어'],
  },
  {
    id: 5,
    nickname: '박동수',
    title: '2년경력과 펫시터 자격증 보유하였습니다',
    rating: '⭐️⭐️',
    // count: '3',
    address: '서울시 송파구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1633177188754-980c2a6b6266?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.55455089212772,
    longitude: 126.97058659668593,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1661338953443-f0757ecba8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
  },
  {
    id: 6,
    nickname: '김수호',
    title: '쾌적하고 따뜻한 분위기에서 제 반려견처럼 케어합니다.',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    // count: '4',
    address: '서울시 서대문구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1552358155-515e264cb8b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFzaWFufGVufDB8fDB8fHww',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.55455089212772,
    longitude: 126.97058659668593,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1661338953443-f0757ecba8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '35,000',
  },
  {
    id: 7,
    nickname: '박사랑',
    title: '친절한 펫시터가 되겠습니다.',
    rating: '⭐️⭐️⭐️⭐️',
    // count: '2',
    address: '서울시 노원구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1498090890888-3df9298e7b84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxhc2lhbnxlbnwwfHwwfHx8MA%3D%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.55455089212772,
    longitude: 126.97058659668593,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1661338953443-f0757ecba8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
  },
  {
    id: 8,
    nickname: '김이슬',
    title: '아파트 마당과 5분거리 뒷산 산책길 집중 돌봄 합니다.',
    rating: '⭐️⭐️⭐️',
    // count: '3',
    address: '서울시 노원구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1617421272636-e676a3db8ea7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFzaWFufGVufDB8fDB8fHww',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.55455089212772,
    longitude: 126.97058659668593,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1661338953443-f0757ecba8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
  },
  {
    id: 9,
    nickname: '박민호',
    title: '펫시터 경력 3년, 상주견 없이 견주님 아이들만 집중돌봄 합니다.',
    rating: '⭐️⭐️⭐️',
    // count: '3',
    address: '서울시 용산구',
    createAt: '2024.01.14',
    viewCnt: 10,
    profilePic1:
      'https://images.unsplash.com/photo-1520528992676-b52756d25c45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxrb3JlYW58ZW58MHx8MHx8fDA%3D',
    profilePic2:
      'https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cHB5fGVufDB8fDB8fHww',
    profilePic3:
      'https://plus.unsplash.com/premium_photo-1661723698664-fcfef3f355ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxwdXBweSUyMHdpdGh8ZW58MHx8MHx8fDA%3D',
    latitude: 37.53295734943876,
    longitude: 126.9923178370275,
    reviewCnt: 2,
    reviews: [
      {
        id: 101,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://images.unsplash.com/photo-1618359057154-e21ae64350b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww',
        reviewNickname: '초코비',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents:
          '케어를 너무 잘 해주셨어요~! 하나하나 다 신경써주시고, 덕분에 마음놓고 볼일 볼 수 있었습니다! 다음에 또 맡기고 싶어요 ㅎㅎ',
      },
      {
        id: 102,
        reviewCnt: 4,
        averageRating: '⭐️⭐️⭐️⭐️',
        reviewPic:
          'https://plus.unsplash.com/premium_photo-1661338953443-f0757ecba8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8fDA%3D',
        reviewNickname: '비누',
        reviewCreateAt: '2024-01-14',
        reviewRating: '⭐️⭐️⭐️',
        reviewContents: '비누랑 산책을 많이해주신것같아 감사합니다. 다음에 또 맡기고 싶어요 ㅎㅎ ',
      },
    ],
    standardPrice: '13,000',
    addPrice: '3,000',
    nightPrice: '30,000',
  },
];

export default PetSittersData;
