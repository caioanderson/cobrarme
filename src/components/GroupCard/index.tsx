import React from 'react';
import { RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card, Header, Icon, Image, NameGroup, Status, QtdPessoas } from './styles';

interface User {
    amount: string;
    id: string;
    type: "no-debit" | "debit";
}

interface Member {
    users: User[]
}

export interface Group {
    id: string;
    amount: string;
    category: string;
    members: Member;
    name: string;
    quantity: string;
    urlImage: string;
}

interface GroupProps {
    data: Group;
}

export function GroupCard({ data }: GroupProps) {
  
    const isExistsDebits = data.members.users.some(account => account.type === 'debit');
    console.log("🚀 ~ file: index.tsx ~ line 33 ~ GroupCard ~ isExistsDebits", isExistsDebits)

    return (
        <GestureHandlerRootView>
            <Card>
                <Header>
                    <Icon>
                        <Image uri={data.urlImage} />
                    </Icon>

                    <NameGroup>{data.name}</NameGroup>

                </Header>

                <Status type={isExistsDebits}>
                    {isExistsDebits ? 'Existem debitos' : 'Sem debitos'}
                    </Status>

                <QtdPessoas>{data.quantity} pessoas</QtdPessoas>

            </Card>
        </GestureHandlerRootView>
    )
}