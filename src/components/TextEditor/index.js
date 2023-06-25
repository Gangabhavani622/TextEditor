import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContainer,
  HomeContainer,
  Heading,
  Image,
  InputContainer,
  StylingContainer,
  ListElement,
  Button,
  HorizontalLine,
  TextAreaInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
    inputValue: '',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickChangeBoldStyle = () => {
    this.setState(prevState => ({
      boldActive: !prevState.boldActive,
    }))
  }

  onClickChangeItalicStyle = () => {
    this.setState(prevState => ({
      italicActive: !prevState.italicActive,
    }))
  }

  onClickChangeUnderlineStyle = () => {
    this.setState(prevState => ({
      underlineActive: !prevState.underlineActive,
    }))
  }

  render() {
    const {boldActive, italicActive, underlineActive, inputValue} = this.state

    return (
      <AppContainer>
        <TextEditorContainer>
          <HomeContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </HomeContainer>
          <InputContainer>
            <StylingContainer>
              <ListElement>
                <Button
                  type="button"
                  data-testid="bold"
                  active={boldActive}
                  onClick={this.onClickChangeBoldStyle}
                >
                  <VscBold size={25} />
                </Button>
              </ListElement>
              <ListElement>
                <Button
                  type="button"
                  data-testid="italic"
                  active={italicActive}
                  onClick={this.onClickChangeItalicStyle}
                >
                  <GoItalic size={25} />
                </Button>
              </ListElement>
              <ListElement>
                <Button
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickChangeUnderlineStyle}
                  active={underlineActive}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListElement>
            </StylingContainer>
            <HorizontalLine />
            <TextAreaInput
              fontStyle={italicActive}
              underline={underlineActive}
              fontWeight={boldActive}
              value={inputValue}
              onChange={this.onChangeInput}
            />
          </InputContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
