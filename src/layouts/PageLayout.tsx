import { ReactNode } from 'react';

import Header, { LeftHeaderProps } from '@components/organisms/Header';

type PageLayoutProps = {
	children: ReactNode;
	className?: string;
} & LeftHeaderProps;

const PageLayout = ({ children, className, leftType }: PageLayoutProps) => {
	return (
		<div className="w-[600px] h-fit">
			<Header leftType={leftType} />
			<div className={`w-full ${className}`}>{children}</div>
		</div>
	);
};

export default PageLayout;