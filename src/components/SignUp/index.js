import React from 'react'
import { Text, Container, FormContent, FormLabel, FormWrap, FormH1, FormInput, Form, Icon, FormButton } from './SignUpElements'

const SignUp = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>ACM</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Reach Out</FormH1>
                        <FormLabel htmlFor='for'>Subject</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignUp