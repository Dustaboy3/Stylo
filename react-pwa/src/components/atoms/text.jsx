import { Text } from '@chakra-ui/react'

function CustomText(props) {
    return (
        <Text
            data-testid="custom-text"
            fontSize={props.fontSize}
            color={props.color}
            as={props.type}>
            {props.content}
        </Text>
    );
}

export default CustomText;