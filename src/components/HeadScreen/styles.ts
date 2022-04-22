import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Head = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const BackButton = styled(BorderlessButton)`

`;

export const IconBack = styled(Feather).attrs({
    size: 35,
    name: "chevron-left",
})`
    color: ${({ theme }) => theme.colors.title_light};
`;

export const Logo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title_light};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(17.5)}px;

    flex: .9;
    text-align: center;
`;