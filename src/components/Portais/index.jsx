import React from 'react';
import { PortaisContainer } from './Portais.style';
import { CardContainer } from '../Card/Card.style';

import Card from './Card';
import { portais } from '../../data/Portais';

export const Portais = () => {

    return (
        <PortaisContainer>
            {portais.map((portal) => (
                <Card key={portal.id} card={portal} />
            ))}
        </PortaisContainer >

    );




}
