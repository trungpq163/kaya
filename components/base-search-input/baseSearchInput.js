import React from "react"
import PropTypes from "prop-types"
import StyledComponents from "styled-components"

//prop-types
export const propTypes = {
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  renderLeading: PropTypes.element,
  renderTrailing: PropTypes.element,
}
const defaultProps = {
  disabled: false,
  placeHolder: "Search",
  renderLeading: null,
  renderTrailing: null,
}

//main element
const Input = StyledComponents.input`
  border:1px solid #b2b2b2;
  padding: 0.5rem 1rem;
  border-radius:0.25rem;
  box-sizing: border-box;
  background-color:transparent;
  &:focus{
    outline:none;
    border-color: #7395e5;
    box-shadow: 0 0 0 1px #7395e5;
  }
`
//icons
const getIconPosition = ({ iconPosition }) =>
  iconPosition === "left" ? `left:0;` : `right:0;`
const IconContainer = StyledComponents.span`
  position:absolute;
  display:flex;
  align-items:center;
  top:0;
  bottom:0;
  z-index:-1;
  ${getIconPosition};
  svg{
    width:74px;
    height:1.5rem;
  }
`
const LeadingIcon = ({ icon }) => (
  <IconContainer iconPosition="left">{icon}</IconContainer>
)
const TrailingIcon = ({ icon }) => (
  <IconContainer iconPosition="right">{icon}</IconContainer>
)

//wrapper element

const InputContainer = StyledComponents.div`
  position:relative;
  display:inline;
`

//function component
const baseSearchInput = ({
  placeHolder,
  className,
  onChange,
  renderTrailing,
  renderLeading,
  ...rest
}) => {
  const handleChange = e => onChange(e.target.value)
  return (
    <React.Fragment>
      {renderLeading || renderTrailing ? (
        <InputContainer>
          <Input
            className={className}
            placeholder={placeHolder}
            onChange={handleChange}
            type="search"
            renderTrailing={renderLeading}
            renderTrailing={renderTrailing}
            {...rest}
          />
          {renderLeading && <LeadingIcon icon={renderLeading} />}
          {renderTrailing && <TrailingIcon icon={renderTrailing} />}
        </InputContainer>
      ) : (
        <Input
          className={className}
          placeholder={placeHolder}
          onChange={handleChange}
          type="search"
          {...rest}
        />
      )}
    </React.Fragment>
  )
}

//final assignment
baseSearchInput.propTypes = propTypes
baseSearchInput.defaultProps = defaultProps
export default baseSearchInput
