import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Point = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(30)}px;
`;

export const ContainerAnimation = styled.View`
    flex-direction: row;
    align-items: center;
`;