import React from "react";
import * as styles from "./Search.styles";
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
  Button
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup borderColor="gray.200">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          {/* 나중에 쿼리스트링으로 숙소명 설정 */}
          <Input placeholder="숙소명 입력" />
        </InputGroup>

        <styles.AccordionWrapper>
          <Accordion
            allowToggle
            border="1px"
            borderColor="gray.200"
            borderRadius="5px"
            width="50%"
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Icon as={IoLocationOutline} mr="1rem" />
                    {/* 변경 필요 */}
                    강남/역삼/삼성
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
            width="50%"
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Icon as={IoLocationOutline} mr="1rem" />
                    {/* 변경 필요 */}
                    11.21 - 11.22
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>
        </styles.AccordionWrapper>

        <Button
          bg="#db074a"
          color="white"
          textAlign="center"
          borderRadius="5px"
        >
          검색하기
        </Button>
      </Stack>
    </>
  );
};

export default Search;
