import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';
import { Group } from '../../components/GroupCard';

export const Container = styled(LinearGradient).attrs({
    colors: ['#F8A836', '#FABE68'],
})`
    flex: 1;
`;

export const Wrapper = styled.View`
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const Header = styled.View`
    padding: 0 17px;
`;

export const MyGroups = styled.View`
    margin: 0 7px 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AddGroup = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(28)}px;
` as unknown as typeof Ionicons;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const GroupList = styled(
    FlatList as new (props: FlatListProps<Group>) => FlatList<Group>
).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        marginTop: 17,
    },
})`
`;