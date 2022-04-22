import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.line};

    /* margin-bottom: ${RFPercentage(5.7)}px; */
`;