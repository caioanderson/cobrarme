import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
`;

export const AreaModal = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;

`;

export const Line = styled.View`
    width: 43px;
    height: 2px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.icon_destabilized};
    margin-top: ${RFValue(11)}px;
`;

export const WrapperContent = styled.View`
    flex: .7;
    justify-content: space-around;
    margin-left: 29px;
    margin-right: 29px;
`;

export const Question = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    line-height: ${RFValue(25)}px;
`;

export const Bold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const ButtonCancel = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 19px 55px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;

`;

export const TextButtonCancel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_component};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ButtonConfirmation = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 19px 55px;
    margin-left: 16px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;

`;

export const TextButtonConfirmation = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_component};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title_light};
`;

export const ContainerFooter = styled.View`
    flex: .3;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.no_debit};
`;


