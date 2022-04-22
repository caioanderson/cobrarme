import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.title_light};
    margin-bottom: 16px;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
`;

export const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    flex: 1;
    text-align: center;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular_component};
`;

