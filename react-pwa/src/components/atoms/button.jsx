import { Button } from '@chakra-ui/react'
import React from 'react';
import '../../css/atoms/header.css'

function CustomButton(props) {
    return (
        <Button
            data-testid="custom-button"
            colorScheme={props.color}
            size={props.size}
            variant={props.variant}
            leftIcon={props.lIcon}
            rightIcon={props.rIcon}
            _hover={{ bg: props.hover }}
            _active={{
                bg: props.active_bg,
                transform: 'scale(0.90)',
                borderColor: props.active_border,
            }}>
            {props.content}
        </Button>
    );
}

export default CustomButton;