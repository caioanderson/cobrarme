import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Divider } from '../../components/Divider';
import { GroupCard } from '../../components/GroupCard';
import { getMyGroups, getGroupsParticipate } from '../../service/database';
import { Group } from '../../components/GroupCard';

import { Container, Title, Wrapper, Header, MyGroups, AddGroup, GroupList } from './styles';

export function Groups() {

    const [myGroups, setMyGroups] = useState<Group[]>()

    useEffect(() => {
        async function getDataGroups() {
            const response: any = await getMyGroups();
            setMyGroups(response);
        }

        getDataGroups();

    }, [])

    return (
        <Container>
            <Wrapper>
                <Header>
                    <MyGroups>
                        <Title>Meus grupos</Title>
                        <AddGroup name='add' />
                    </MyGroups>
                    <Divider />
                </Header>

                <GroupList
                    horizontal
                    data={myGroups}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <GroupCard data={item} />}
                />

            </Wrapper>
        </Container>
    )
}