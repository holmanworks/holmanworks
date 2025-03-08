import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center justify-between max-sm:mx-auto max-sm:max-w-md max-md:flex-wrap max-md:justify-evenly gap-x-4 gap-y-4',
      )}
    >
      <img
        alt="Forethought AI"
        src="/logo-cloud/forethought.svg"
        className="max-sm:mx-auto lg:h-9 sm:h-8 h-7 opacity-90"
      />
      <img
        alt="LINE"
        src="/logo-cloud/line.svg"
        className="max-sm:mx-auto lg:h-6 sm:h-5 h-4 opacity-90"
      />
      <img
        alt="OurSong"
        src="/logo-cloud/oursong.svg"
        className="max-sm:mx-auto lg:h-9 sm:h-8 h-7 opacity-90"
      />
      <img
        alt="KKBOX"
        src="/logo-cloud/kkbox.svg"
        className="max-sm:mx-auto lg:h-6 sm:h-5 h-4 opacity-90"
      />
      <img
        alt="Trend Micro"
        src="/logo-cloud/trendmicro.svg"
        className="max-sm:mx-auto lg:h-9 sm:h-8 h-7 opacity-90"
      />
    </div>
  )
}
