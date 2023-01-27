import React from 'react';
import '../../css/molecules/splitComponent.css';
import CustomButton from '../atoms/button';
import { PhoneIcon, BellIcon } from '@chakra-ui/icons';

const SplitComponent = () => {
    return (
        <div className="split-container">
            <div className={`left-side`}>
                <h1>Frizer?</h1>
                <CustomButton
                    color="cyan"
                    size="lg"
                    vartiant="solid"
                    lIcon={<PhoneIcon data-testid="left-icon" />}
                    rIcon={<BellIcon data-testid="right-icon" />}
                    content="Izberi"
                    hover="#385898"
                    active_bg="#385898"
                />
            </div>
            <div className={`right-side`}>
                <h1>Stranka</h1>
                <CustomButton
                    color="cyan"
                    size="lg"
                    vartiant="ghost"
                    content="Izberi"
                    hover="#385898"
                    active_bg="#385898"
                />
                <CustomButton
                    color="cyan"
                    size="lg"
                    variant="ghost"
                    content="Submit"
                    hover="red"
                />
            </div>
        </div>
    );
};

export default SplitComponent;