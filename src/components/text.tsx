interface TextProps {
  className?: string
  children: React.ReactNode
}

const Text = ({ className, children }: TextProps) => (
  <div className={className}>
    <span>{children}</span>
  </div>
)

export default Text
