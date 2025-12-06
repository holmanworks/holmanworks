import { clsx } from 'clsx'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'sm:px-8 px-6 ')}>
      <div className="mx-auto sm:max-w-[1280px] max-w-[720px]">{children}</div>
    </div>
  )
}
