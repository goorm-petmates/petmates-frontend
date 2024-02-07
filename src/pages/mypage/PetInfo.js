import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import NoContents from "../../components/NoContents";
import "../../styles/StylePetInfo.css";
import PetCard from "../../components/PetCard";
import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';
import { data1, data2 } from '../Data';

function PetInfo() {
  const [petCards, setPetCards] = useState([
    {
      id: 1,
      petImgSrc: "/imgs/dog3.jpeg",
      petInfo: "똑바로/토이푸들/여아/12살/5kg",
    },
    {
      id: 2,
      petImgSrc: "/imgs/dog3.jpeg",
      petInfo: "아지/말티즈/여아/12살/5kg",
    },
    {
      id: 3,
      petImgSrc: "/imgs/dog3.jpeg",
      petInfo: "아지/말티즈/여아/12살/5kg",
    },
  ]);

  const navigate = useNavigate();
  const handleAddPetCard = () => {
    if (petCards.length >= 3) {
      alert("최대 3마리까지 등록할 수 있습니다.");
    } else {
      navigate('/petinfoadd');
    }
    setPetCards([...petCards]);
  }

  return (
    <div>
      <HeaderWithNav />

      <div>
        <div className="mypage-bar" />
        <div className="mypage-bar-text">내정보</div>
      </div>

      <Link to='/myinfo'>
        <button className="petinfo-nav1">내정보</button>
      </Link>
      <Link to='/petInfo'>
        <button className="petinfo-nav2">반려동물 정보</button>
      </Link>
      <div className="mypage-navunderLine"></div>

      <div className="petinfo-container">
        <button className="mypage-petinfo-add" onClick={handleAddPetCard}>
          등록하기
        </button>

        <div className="pet-card-components">
          {data1.pet ? (
            <>
              {petCards.map((petCard) => (
                <PetCard
                  key={petCard.id}
                  petImgSrc={petCard.petImgSrc}
                  petInfo={petCard.petInfo}
                />
              ))}
            </>
          ) : (
            <NoContents text="반려동물 정보" />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetInfo;