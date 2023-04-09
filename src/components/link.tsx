interface LinkProps {
  to?: string
  newTab?: boolean
  label?: string
}

const Link = ({ to, newTab, label }: LinkProps) => {
  if (to === undefined || newTab === undefined || label === undefined)
    return null

  return (
    <a
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer' : undefined}
      className='react-cookienotice-link'
    >
      {label}
    </a>
  )
}

export default Link
