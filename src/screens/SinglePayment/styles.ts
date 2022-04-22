import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 60%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding-top: ${getStatusBarHeight() + RFValue(25)}px;
    padding-left: 27px;
    padding-right: 27px;
`;

export const WrapperContent = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`;

export const Account = styled.Text`
    margin-bottom: 43px;

    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(18)}px;
`;

export const TitlePayment = styled.Text`
     margin-bottom: 3px;

    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(12)}px;
`;


export const Amount = styled.Text`
    margin-bottom: 37px;

    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(36)}px;
    text-align: center;
`;

export const TextSmall = styled.Text`
    font-size: ${RFValue(18)}px;
    text-align: center;
`;

export const ContainerCategory = styled.View`
    margin-bottom: 37px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(18)}px;
`;

export const WrapperCategory = styled.View`
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const ContainerIcon = styled.View`
    margin-top: 12px;
    height: 50px;
    width: 50px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.white_light};
    border-radius: 25px;

`;

export const Icon = styled(Feather).attrs({
    name: "headphones",
    size: 24

})`
    color: ${({ theme }) => theme.colors.title_light};
`;

export const Name = styled.Text`
    margin-top: 10px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(11)}px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 40%;

    align-items: center;
    padding: 0 20px;

    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TitleInfo = styled.Text`
    margin: 39px 0;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title_light};
    text-align: center;
`;

export const PaymentButton = styled(RectButton)`
    width: 100%;
    padding: 20px 15px;
    background-color: ${({ theme }) => theme.colors.cyan};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;

export const Cod = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title_light};
    text-align: center;
`;

export const Clip = styled(Feather).attrs({
    name: "copy",
    size: 28
})`
    color: ${({ theme }) => theme.colors.title_light}
`;
