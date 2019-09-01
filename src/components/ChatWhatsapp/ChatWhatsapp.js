import React from 'react'
import { useIsMobile } from './../../hooks'
import { string, node } from 'prop-types'

const ChatWhatsapp = ({
  children,
  phone,
  target,
  rel,
  message,
  restProps
  }) => {

  let link = useIsMobile() ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send'
  let appendNumber = phone ? `?phone=${phone}` : null
  let appendMessage = phone && message ? `&text=${message}` : null

  return (
    <a
      href={link+appendNumber+appendMessage}
      target={target}
      rel={rel}
      {...restProps}>
      {children}
    </a>
  )
}

ChatWhatsapp.defaultProps = {
  messge: 'Hello, there! General Kenobi...',
  target: '_blank',
  rel: 'noreferrer noopener',
};

ChatWhatsapp.propTypes = {
  phone: string.isRequired,
  message: string,
  target: string,
  rel: string,
  children: node.isRequired,
}

export default ChatWhatsapp
