interface TextProps {
  children: React.ReactNode
}

const Text = ({ children }: TextProps) => (
  <span className='react-cookienotice-label'>{children}</span>
)

export default Text
