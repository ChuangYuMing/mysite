import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`

export default Box