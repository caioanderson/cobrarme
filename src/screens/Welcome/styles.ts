import styled from 'styled-components/native';
import { RFPercentage, RFValue,  } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary};

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold}
    color: ${({ theme }) => theme.colors.title_light}
    font-size: ${RFValue(30)}px;
`;