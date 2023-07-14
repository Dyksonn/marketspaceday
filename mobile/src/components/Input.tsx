import { useState } from 'react';
import { Input as NativeBaseInput, IInputProps, FormControl, Pressable, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type Props = IInputProps & {
  errorMessage?: string | null;
  secure?: boolean;
}

export function Input({ errorMessage = null, secure = false, isInvalid, ...rest }: Props) {
    const [show, setShow] = useState(false);
    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={4}>
        <NativeBaseInput 
            bg="gray.100"
            h={14}
            px={4}
            borderWidth={0}
            borderRadius={6}
            fontSize="md"
            color="gray.600"
            fontFamily="body"
            placeholderTextColor="gray.400"
            isInvalid={invalid}
            _invalid={{
            borderWidth: 1,
            borderColor: "red.500"
            }}
            _focus={{
            bgColor: 'gray.100',
            borderWidth: 1,
            borderColor: 'gray.500'
            }}
            InputRightElement={secure ? <Pressable onPress={() => setShow(!show)}>
            <Icon as={MaterialIcons} name={show ? 'visibility' : 'visibility-off'} size={5} mr={4} />
            </Pressable> : <></>}
            secureTextEntry={secure ? show : false}
            {...rest}
        />

        <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
            {errorMessage}
        </FormControl.ErrorMessage>
        </FormControl>
    );
}