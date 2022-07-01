import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SvgFromUri } from 'react-native-svg';

export const Card = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(150)}px;
    padding: 22px 10px;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin-bottom: 12px;
`;


export const Icon = styled.View`
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100px;
    elevation: 10;
`;


export const Image = styled(SvgFromUri).attrs({
    width: 28,
    height: 28
})``;


export const NameGroup = styled.Text`
    margin-left: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.colors.title};
`;

interface StatusProps {
    type: boolean;
}

export const Status = styled.Text<StatusProps>`
    margin-bottom: 24px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme, type }) => type ? theme.colors.debit : theme.colors.no_debit };
`;


export const QtdPessoas = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;


