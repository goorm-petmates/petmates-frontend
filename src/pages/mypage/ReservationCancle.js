import React, { useEffect, useState } from 'react';
import '../../styles/ReserveCancle.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import ReservePetsitterCard from '../../components/ReservePetsitterCard';
import NoContents from '../../components/NoContents';

const ReservationCancle = () => {
  const renderReservationCards = () => {
    // if (data1.reservations_cancle === 'N') {
    //   // 취소 내역이 없는 경우 NoContents 컴포넌트 출력
    //   return <NoContents text='취소 내역' />;
    // } else {
    //   // 취소 내역이 있는 경우 ReservePetsitterCard 컴포넌트 출력
    //   return (
    //     <>
    //       {data1.reservations_cancle === 'Y' && (
    //         <>
    //           <ReservePetsitterCard
    //             reservePetImgSrc={data1.petImgSrc}
    //             petInfo={`${data1.name}/${data1.breed}/${data1.sex === 'M' ? '남아' : '여아'}/${
    //               new Date().getFullYear() - data1.birthYear
    //             }살/${data1.weight}kg`}
    //             state='취소완료'
    //           />
    //           <ReservePetsitterCard
    //             reservePetImgSrc={data2.petImgSrc}
    //             petInfo={`${data2.name}/${data2.breed}/${data2.sex === 'M' ? '남아' : '여아'}/${
    //               new Date().getFullYear() - data2.birthYear
    //             }살/${data2.weight}kg`}
    //             state='취소완료'
    //           />
    //         </>
    //       )}
    //     </>
    //   );
    // }
  };

  const [petCards, setPetCards] = useState([]);

  const petId = 1;

  useEffect(() => {
    // memberId를 사용하여 MSW 핸들러에서 반환된 응답을 사용
    fetch(`/api/my-page/petsitter/${petId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        // API 응답 데이터를 petCards 형태로 가공
        const formattedData = res.data.map((pet) => ({
          id: pet.id, // 반려동물의 고유 식별자
          reservePetImgSrc: pet.reservePetImgSrc, // 반려동물 이미지 URL
          petName: pet.name, // 반려동물 정보
          state: pet.state,
          breed: pet.breed,
          sex: pet.sex,
          birth: pet.birth,
          weight: pet.weight,
        }));

        setPetCards(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <>
      {/*<HeaderWithNav />*/}

      <div>
        <div className='mypage-bar' />
        <div className='mypage-bar-text'>예약내역</div>
      </div>

      <Link to='/reservepetsitter'>
        <button className='reservation-cancle-nav1'>펫시터</button>
      </Link>
      <Link to='/reservecancle'>
        <button className='reservation-cancle-nav2'>취소내역</button>
      </Link>
      <Link to='/reservereview'>
        <button className='reservation-cancle-nav3'>후기작성</button>
      </Link>

      <div className='mypage-navunderLine'></div>

      <div className="mypage-cancle-container">
        <div className='cancle-container'>
          {petCards.length > 0 ? (
            petCards.map((petCard) => (
              <ReservePetsitterCard
                key={petCard.id}
                reservePetImgSrc={petCard.reservePetImgSrc}
                petInfo={petCard.petName + " " + petCard.breed + " " + (new Date().getFullYear() - new Date(petCard.birth).getFullYear()) + "살" + " " + petCard.weight + "kg"}
                state={petCard.state}
              />
            ))
          ) : (
            <NoContents text="반려동물 정보" />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReservationCancle;