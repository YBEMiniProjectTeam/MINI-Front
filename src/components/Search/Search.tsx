import React, { useEffect, useState } from "react";
import * as styles from "./Search.styles";
import type { SearchProps } from "./Search.types";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  Icon,
  Button,
  Select,
  useDisclosure
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { SearchIcon } from "@chakra-ui/icons";
import { truncateText } from "@utils/truncateText";
import { convertDateFormat2 } from "@utils/convertDateFormat2";
import { convertDateFormat3 } from "@utils/convertDateFormat3";
import ChooseRegionModal from "../ChooseRegionModal/ChooseRegionModal";
import ChooseDateModal from "../ChooseDateModal/ChooseDateModal";
import { useSearchList } from "@hooks/useSearchList";
import { checkInAndOutDateState } from "@recoil/checkInAndOutDate";
import {
  districtState,
  categoryState,
  isRefetchedState
} from "@recoil/searchStates";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";
import { Nullable } from "@/types/nullable";

const Search = ({ keyword, category, region }: SearchProps) => {
  const {
    isOpen: isOpenChooseRegionModal,
    onOpen: onOpenChooseRegionModal,
    onClose: onCloseChooseRegionModal
  } = useDisclosure();

  const {
    isOpen: isOpenChooseDateModal,
    onOpen: onOpenChooseDateModal,
    onClose: onCloseChooseDateModal
  } = useDisclosure();

  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    region ? region : ""
  );
  const [selectedDate, setSelectedDate] = useState<Nullable<string[]>>([]);
  const [accommodationName, setAccommodationName] = useState<string>(
    keyword ? keyword : ""
  );
  const [startDate, setStartDate] = useState<Nullable<string>>("");
  const [endDate, setEndDate] = useState<Nullable<string>>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    category ? category : ""
  );
  const [isFromSearchResult, setIsFromSearchResult] = useState<boolean>(false);

  const setCheckInAndOutDateState = useSetRecoilState(checkInAndOutDateState);
  const setDistrictState = useSetRecoilState(districtState);
  const setCategoryState = useSetRecoilState(categoryState);
  const [isRefetched, setIsRefetched] = useRecoilState(isRefetchedState);

  const { headers } = getAuthLocalStorage();

  const { data, refetch } = useSearchList(
    accommodationName,
    selectedDistrict,
    startDate,
    endDate,
    selectedCategory,
    1,
    10,
    isRefetched,
    headers
  );

  useEffect(() => {
    setIsFromSearchResult(true);
  }, []);

  useEffect(() => {
    const newCategory = category ? category : "";
    setSelectedCategory(newCategory);
    setCategoryState(newCategory);
  }, []);

  useEffect(() => {
    const newDistrict = region ? region : "";
    setSelectedDistrict(newDistrict);
    setDistrictState(newDistrict);
  }, []);

  useEffect(() => {
    if (selectedDate && selectedDate.length > 1) {
      setStartDate(convertDateFormat3(selectedDate[0]));
      setEndDate(convertDateFormat3(selectedDate[1]));
    }
  }, [selectedDate]);

  useEffect(() => {
    const newCheckInAndOutDate = {
      startDate,
      endDate
    };

    setCheckInAndOutDateState(newCheckInAndOutDate);
  }, [startDate, endDate]);

  useEffect(() => {
    setIsRefetched(true);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isRefetched]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchClick = () => {
    let newRefetchState = isRefetched;
    newRefetchState = !newRefetchState;

    refetch();
    setIsRefetched(newRefetchState);
  };

  return (
    <>
      <ChooseRegionModal
        isOpen={isOpenChooseRegionModal}
        onClose={onCloseChooseRegionModal}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
      />
      <ChooseDateModal
        isOpen={isOpenChooseDateModal}
        onClose={onCloseChooseDateModal}
        setSelectedDate={setSelectedDate}
        isFromSearchResult={isFromSearchResult}
      />
      <Stack spacing={4}>
        <InputGroup borderColor="gray.200">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>

          <Input
            placeholder={accommodationName ? undefined : "숙소명 입력"}
            value={accommodationName}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
          />
        </InputGroup>

        <styles.AccordionWrapper>
          <Accordion
            allowToggle
            border="1px"
            borderColor="gray.200"
            borderRadius="5px"
            width="33%"
            onClick={onOpenChooseRegionModal}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Icon as={IoLocationOutline} mr="1rem" />
                    {truncateText(selectedDistrict) || "지역 선택"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>

          <Accordion
            allowToggle
            border="1px"
            borderColor="gray.200"
            borderRadius="5px"
            width="33%"
            onClick={onOpenChooseDateModal}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Icon as={CiCalendar} mr="1rem" />
                    {selectedDate && selectedDate?.length > 1 && selectedDate[0]
                      ? `${convertDateFormat2(
                          selectedDate[0]
                        )} - ${convertDateFormat2(selectedDate[1])}`
                      : "날짜 선택"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>

          <Select
            variant="outline"
            border="1px"
            borderColor="gray.200"
            borderRadius="5px"
            width="33%"
            cursor="pointer"
            _hover={{ backgroundColor: "#f5f5f5" }}
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">모든 숙소</option>
            <option value="호텔">호텔</option>
            <option value="리조트">리조트</option>
            <option value="모텔">모텔</option>
            <option value="펜션">펜션</option>
          </Select>
        </styles.AccordionWrapper>

        <Button
          bg="#db074a"
          color="white"
          textAlign="center"
          borderRadius="5px"
          mb="1rem"
          onClick={handleSearchClick}
        >
          검색하기
        </Button>
      </Stack>
    </>
  );
};

export default Search;
