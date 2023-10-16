import classNames from 'classnames'

export default function AppMaterialIcon({ size, className, type, children }) {
  return (
    <span
      style={{
        fontSize: size,
      }}
      className={classNames(type, className, 'mater-icon')}
    >
      {children}
    </span>
  )
}
