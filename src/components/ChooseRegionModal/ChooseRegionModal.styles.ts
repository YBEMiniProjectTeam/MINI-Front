import styled from "styled-components";
import { SideTabProps } from "./ChooseRegionModal.types";

export const SideTabs = styled.div`
    display: flex;
`;

export const SideTabList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f4f6;
    width: 130px;
`;

export const SideTab = styled.div<SideTabProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 48px;
    font-size: 14px;
    color: ${(props) => (props.selected ? '#db074a' : '#888')};
    background-color: ${(props) => (props.selected ? 'white' : '#f4f4f6')};

    &:hover {
        background-color: ${(props) => (props.selected ? 'white' : '#e0e0e0')};
    }
`;

export const DistrictList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const District = styled.div`
    padding-left: 1rem;
    cursor: pointer;
    line-height: 48px;
    &:hover {
        background-color: #e0e0e0;
    }
`;
