import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 10px;

    padding: 17px 16px;
    margin-bottom: ${RFPercentage(3)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.Image`
    height: ${RFValue(30)}px;
    width: ${RFValue(30)}px;
`;

export const Account = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const AccountName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    line-height: ${RFValue(17.5)}px;
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.colors.title};
    line-height: ${RFValue(13.5)}px;
`;

interface AmountProps {
    type: 'debit' | 'no-debit'
}
export const Amount = styled.Text<AmountProps>`
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(16)}px;
    color: ${({ type, theme }) => type === 'debit' ? theme.colors.debit : theme.colors.no_debit};
    line-height: ${RFValue(20)}px;
`;

export const Detail = styled.View`
    flex-direction: column;
    margin-left: 15px;
`;