import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #25262c;
  padding: 20px;
`

export const TextEditorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #1b1c22;
  padding: 20px;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
`

export const Image = styled.img`
  height: 65%;
  width: 55%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #334155;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  height: 100%;
  width: 85%;
  padding: 10px;
`

export const StylingContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: auto;
`
export const ListElement = styled.li`
  margin-right: 5px;
  background-color: none;
`

export const Button = styled.button`
  border: none;

  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
`

export const HorizontalLine = styled.hr`
  flex-grow: 1;
  margin: 0 10px;
  border-top: 1px solid #cbd5e1;
  width: 100%;
`

export const TextAreaInput = styled.textarea`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-style: ${props => (props.fontStyle ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-weight: ${props => (props.fontWeight ? 'bold' : 'normal')};
  background-color: transparent;
  height: 100%;
  border: none;
`
