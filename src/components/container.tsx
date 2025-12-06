import { clsx } from 'clsx'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'px-5')}>
      <div className="mx-auto sm:max-w-[1280px] max-w-[720px]">{children}</div>
    </div>
  )
}
