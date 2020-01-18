import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Scroll , Notification } from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread={true}>
                <MdNotifications color="#7159c1" size={20}></MdNotifications>
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unread={true}>
                        <p>Vocề possui um novo agendamento para amanhã</p>
                        <time>há 2 dias atras
                        <button type="button">Marcar como lida</button>
                        </time>
                    </Notification>
                    <Notification>
                        <p>Vocề possui um novo agendamento para amanhã</p>
                        <time>há 2 dias atras
                        <button type="button">Marcar como lida</button>
                        </time>
                    </Notification>
                    <Notification>
                        <p>Vocề possui um novo agendamento para amanhã</p>
                        <time>há 2 dias atras
                        <button type="button">Marcar como lida</button>
                        </time>
                    </Notification>
                    <Notification>
                        <p>Vocề possui um novo agendamento para amanhã</p>
                        <time>há 2 dias atras
                        <button type="button">Marcar como lida</button>
                        </time>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
