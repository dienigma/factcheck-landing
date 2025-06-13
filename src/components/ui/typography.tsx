import classNames from 'classnames';

export function Text({ children, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={classNames('text-[16px] font-medium text-[#F2F2F2]', className)} {...props}>
      {children}
    </p>
  );
}

export function Title({ children, className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={classNames('text-[31px] font-medium text-[#F2F2F2]', className)} {...props}>
      {children}
    </h2>
  );
}


