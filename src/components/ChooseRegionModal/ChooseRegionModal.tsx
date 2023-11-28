import React, { useEffect, useState } from "react";
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
import type {
  DisclosureProps,
  Region,
  District
} from "./ChooseRegionModal.types";
import { useRegionList } from "@/hooks/useRegionList";
import { useDistrictList } from "@/hooks/useDistrictList";

const ChooseRegionModal = ({
  isOpen,
  onClose,
  selectedDistrict,
  setSelectedDistrict
}: DisclosureProps) => {
  const [selectedRegion, setSelectedRegion] = useState(1);
  const [regionList, setRegionList] = useState<Region[]>([]);
  const [districtList, setDistrictList] = useState<District[]>([]);

  const regionData = useRegionList().data;
  const regionError = useRegionList().error;

  const districtData = useDistrictList(selectedRegion).data;
  const districtError = useDistrictList(selectedRegion).error;
  const districtRefetch = useDistrictList(selectedRegion).refetch;

  if (regionError) {
    console.error("An error has occurred:", regionError.message);
  }

  if (districtError) {
    console.error("An error has occurred:", districtError.message);
  }

  useEffect(() => {
    setRegionList(regionData);
  }, [regionData]);

  useEffect(() => {
    setDistrictList(districtData);
  }, [districtData]);

  useEffect(() => {
    districtRefetch();
  }, [selectedRegion]);

  useEffect(() => {
    onClose();
  }, [selectedDistrict]);

  const handleRegionSelect = (regionId: number) => {
    setSelectedRegion(regionId);
  };

  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
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
                {regionList?.map((region) => (
                  <styles.SideTab
                    key={region.id}
                    onClick={() => handleRegionSelect(region.id)}
                    selected={selectedRegion === region.id}
                  >
                    {region.name}
                  </styles.SideTab>
                ))}
              </styles.SideTabList>
              <styles.DistrictList>
                {districtList?.map((district) => (
                  <styles.District
                    key={district.id}
                    onClick={() => handleDistrictSelect(district.name)}
                  >
                    {district.name}
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
