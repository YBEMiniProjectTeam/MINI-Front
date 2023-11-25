import React, { useEffect, useState } from "react";
import * as styles from "./Search.styles";
import { SearchProps } from "./Search.types";
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
import { convertDateFormat3 } from "@/utils/convertDateFormat3";
import ChooseRegionModal from "../ChooseRegionModal/ChooseRegionModal";
import ChooseDateModal from "../ChooseDateModal/ChooseDateModal";
import { useSearchList } from "@hooks/useSearchList";

const Search = ({ keyword, category }: SearchProps) => {
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

  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string[] | null>([]);
  const [accommodationName, setAccommodationName] = useState<string>(
    keyword ? keyword : ""
  );
  const [startDate, setStartDate] = useState<string | null>("");
  const [endDate, setEndDate] = useState<string | null>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    category ? category : ""
  );
  const [isFromSearchResult, setIsFromSearchResult] = useState<boolean>(false);

  const { refetch } = useSearchList(
    accommodationName,
    selectedDistrict,
    startDate,
    endDate,
    selectedCategory
  );

  useEffect(() => {
    setIsFromSearchResult(true);
  }, []);

  useEffect(() => {
    setSelectedCategory(category ? category : "");
  }, []);

  useEffect(() => {
    if (selectedDate && selectedDate.length > 1) {
      setStartDate(convertDateFormat3(selectedDate[0]));
      setEndDate(convertDateFormat3(selectedDate[1]));
    }
  }, [selectedDate]);

  if (category) {
    switch (category) {
      case "hotel":
        category = "호텔/리조트";
        break;
      case "motel":
        category = "모텔";
        break;
      case "pension":
        category = "풀빌라/펜션";
        break;
      case "all":
        category = "";
        break;
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchClick = () => {
    refetch();
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
            defaultValue="모든 숙소"
          >
            <option value="모든 숙소">모든 숙소</option>
            <option value="호텔/리조트">호텔/리조트</option>
            <option value="모텔">모텔</option>
            <option value="풀빌라/펜션">풀빌라/펜션</option>
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
