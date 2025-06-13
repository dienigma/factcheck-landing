import classNames from 'classnames';

export function Card({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={classNames(
        'flex flex-col p-4 bg-white rounded-lg shadow-[0px_2.8px_7px_0px_#0000000A]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
