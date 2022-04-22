import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { DataListProps } from '.'


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};

`;

export const UserWrapper = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;

    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
`;

export const Header = styled(LinearGradient).attrs({
    colors: ['#F8A836', '#FABE68'],
})`
    height: ${RFPercentage(23.5)}px;
    width: 100%;

`;

export const Welcome = styled.View`
    padding-left: ${RFValue(29)}px;
`;

export const WelcomeUser = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.semi_bold};
`;

export const Message = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: ${RFValue(16.25)}px;
`;

export const ContainerPhoto = styled.View`
    position: relative;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    margin-right: ${RFValue(19)}px;
    border-radius: 8px;
`;

export const Notification = styled(Ionicons)`
    position: absolute;
    right: 13px;
    top: -10px;

    color: ${({ theme }) => theme.colors.debit};
    font-size: ${RFValue(19)}px;
`;

export const CardCountAccountWrapper = styled.View`
    width: 100%;
    align-items: center;
`;

export const CardCountAccount = styled.View`
    margin-top: -35px;
    width: ${RFValue(327)}px;
    height: ${RFValue(80)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const TextLogo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title_light};
`;

export const Divider = styled.View`
    width: 1px;
    height: ${RFValue(32)}px;
    background-color: ${({ theme }) => theme.colors.white_light};
`;

export const TextCountAccounts = styled.Text`
    margin-right: 29px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.title_light};
`;

export const Count = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Main = styled.View`
    flex: 1;
    margin-top: ${RFPercentage(6)}px;
    margin-left: ${RFPercentage(3.3)}px;
    margin-right: ${RFPercentage(3.7)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom : 23px;
`;


export const AccountList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace(),
        marginTop: 20
    },
})``;

export const OpacityBackground = styled.View`
    flex: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.background_black_with_opacity};
    width: 100%;
    height: 100%;
`;

export const Modal = styled.Modal.attrs({
    animationType: "slide",
    transparent: true,
    swipeDirection: ['up', 'left', 'right', 'down']
})`
    margin: 0;
    justify-content: flex-end;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#fff',
})`
`;