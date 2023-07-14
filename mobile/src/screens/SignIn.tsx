import { 
    Center, 
    Heading, 
    VStack,
    Text
} from 'native-base';

import LogoSVG from '@assets/logo.svg';
import { Input } from '@components/Input';

export function SignIn() {
    return (
        <VStack flex={1} bg="gray.100">
            <VStack py={20} px={12} mb={12} borderBottomRadius={24} bg="gray.200">
                <Center mb={20}>
                    <LogoSVG />
                    <Heading mt={2} fontSize="3xl" color="gray.700" fontFamily="heading">marketspace</Heading>
                    <Text fontSize="sm" color="gray.500" fontFamily="body">Seu espaço de compra e venda</Text>
                </Center>

                <Text textAlign='center' mb={4} color="gray.600" fontSize="sm" fontFamily="body">Acesse sua conta</Text>
                <Input 
                    placeholder='E-mail'
                />
                <Input 
                    placeholder='Senha'
                    secure
                />
            </VStack>

            <Center mb={8}>
                <Text>Ainda não tem acesso?</Text>
            </Center>
        </VStack>
    );
}