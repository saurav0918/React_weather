import { createGlobalStyle } from 'styled-components'

const lightTheme = {
    body:'white',
    fontColor:'black'


}

const darkTheme = {
    body:'black',
    fontColor:'white'

}


const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props)=>props.theme.body}
    }
`

export {lightTheme, darkTheme, GlobalStyles}