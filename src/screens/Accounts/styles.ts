import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { DataListProps } from '../Home';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

// export const Container = styled(LinearGradient).attrs({
//     colors: ['#F8A836', '#FABE68'],
// })`
//     flex: 1;
//     padding: 0 24px;
// `;

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.primary};
`;




export const ContainerCardTotalAmount = styled.View`
    height: ${RFPercentage(25)}px;
    width: 100%;
    margin-top: ${RFValue(39) + getStatusBarHeight()}px;
    align-items: center;
`;

export const CardTotalAmount = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 29px 17px;
    justify-content: space-between;
`;

export const Logo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title_light};
`;

export const ContainerTotal = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Total = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title_light};
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title_light};
    align-items: center;
`;

export const ContainerContentAccounts = styled.View`
    flex: 1;
    margin-top: ${RFValue(26)}px;

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title_light};
    margin-bottom: ${RFValue(24)}px;

`;

export const ContainerAccounts = styled.View`
    flex: 1;
    padding-top: 24px;

`;

export const ListAccounts = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#fff',
})``;