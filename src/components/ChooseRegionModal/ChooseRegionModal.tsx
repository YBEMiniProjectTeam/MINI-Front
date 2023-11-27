import React, { useState } from "react";
import * as styles from "./ChooseRegionModal.styles";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import type { DisclosureProps } from "./ChooseRegionModal.types";

const ChooseRegionModal = ({
  isOpen,
  onClose,
  selectedDistrict,
  setSelectedDistrict
}: DisclosureProps) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    "서울",
    "부산",
    "제주",
    "강원",
    "경기",
    "인천",
    "전라",
    "경상",
    "대구",
    "충청",
    "대전"
  ];

  const districts: {
    [key: string]: string[];
  } = {
    서울: [
      "강남 / 역삼 / 삼성",
      "서초 / 교대 / 사당",
      "잠실 / 송파 / 강동",
      "신사 / 압구정 / 청담",
      "서울역 / 이태원 / 용산",
      "명동 / 중구",
      "을지로 / 충무로",
      "종로 / 동대문 / 인사동",
      "서대문 / 마포 / 신촌 / 홍대",
      "영등포 / 여의도",
      "신림 / 구로 / 금천",
      "김포공항 / 강서구",
      "건대 / 성수 / 왕십리",
      "노원 / 수유 / 도봉",
      "서울 전체"
    ],
    부산: [
      "해운대",
      "송정 / 기장",
      "광안리 / 센텀",
      "부산역 / 남포 / 자갈치 / 송도",
      "서면 / 연산",
      "동래 / 사상",
      "부산 전체"
    ],
    제주: [
      "제주시",
      "서귀포시 / 중문",
      "제주국제공항",
      "애월 / 함덕 / 성산",
      "제주 전체"
    ],
    강원: [
      "속초 / 양양 / 고성",
      "강릉",
      "평창",
      "동해 / 정선 / 삼척 / 태백",
      "춘천 / 홍천 / 원주",
      "인제 / 철원 / 양구",
      "강원 전체"
    ],
    경기: [
      "수원",
      "용인 / 평택",
      "안산 / 부천 / 광명 / 시흥",
      "파주 / 고양 / 김포",
      "화성 / 오산",
      "가평 / 양평",
      "성남 / 광주 / 분당 / 과천",
      "의정부 / 동두천 / 포천",
      "안양 / 의왕 / 군포",
      "남양주 / 구리 / 하남",
      "이천 / 여주",
      "경기 전체"
    ],
    인천: [
      "인천국제공항 / 강화",
      "송도 / 연수구",
      "미추홀 / 인천시청",
      "을왕리 / 월미도 / 영종도 / 청라",
      "부평 / 계양",
      "인천 전체"
    ],
    전라: [
      "전주",
      "여수 / 순천 / 광양",
      "광주",
      "군산 / 부안 / 익산 / 고창",
      "목포 / 해남 / 보성 / 나주 / 담양",
      "남원 / 구례",
      "전라 전체"
    ],
    경상: [
      "경주",
      "울산",
      "거제 / 통영",
      "포항",
      "남해 / 진주 / 사천 / 산청",
      "창원 / 김해 / 양산",
      "영덕 / 울진 / 청송",
      "구미 / 김천 / 안동",
      "청도 / 문경",
      "경상 전체"
    ],
    대구: [
      "중구 / 북구 / 서구",
      "동구 / 수성구",
      "달서구 / 남구 / 달성군",
      "대구 전체"
    ],
    충청: [
      "천안 / 아산 / 세종 / 금산",
      "태안 / 보령 / 서산 / 덕산",
      "단양 / 제천 / 충주",
      "청주 / 보은 / 음성 / 진천",
      "충청 전체"
    ],
    대전: ["서구", "유성구", "동구 / 중구 / 대덕구", "대전 전체"]
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    console.log(district);
    onClose();
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent maxW="720px" maxH="600px" overflow="auto">
          <ModalHeader
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            지역 선택
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Tabs isFitted variant="line">
              <TabList>
                <Tab>지역명</Tab>
              </TabList>
            </Tabs>
            <styles.SideTabs>
              <styles.SideTabList>
                {regions.map((region) => (
                  <styles.SideTab
                    key={region}
                    onClick={() => handleRegionSelect(region)}
                    isSelected={selectedRegion === region}
                  >
                    {region}
                  </styles.SideTab>
                ))}
              </styles.SideTabList>
              <styles.DistrictList>
                {districts[selectedRegion] &&
                  selectedRegion !== "" &&
                  districts[selectedRegion].map((district) => (
                    <styles.District
                      key={district}
                      onClick={() => handleDistrictSelect(district)}
                      isSelected={selectedDistrict === district}
                    >
                      {district}
                    </styles.District>
                  ))}
              </styles.DistrictList>
            </styles.SideTabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChooseRegionModal;
