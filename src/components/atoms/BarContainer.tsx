import { ReactNode } from 'react';

type BarContainerProps = {
	animationDuration: number;
	children: ReactNode;
	isFinished: boolean;
};

const BarContainer = ({
	animationDuration,
	children,
	isFinished,
}: BarContainerProps) => (
	<div
		className={`relative ${
			isFinished ? 'opacity-0' : 'opacity-100'
		} pointer-events-none`}
		style={{
			transition: `opacity ${animationDuration}ms linear`,
		}}
	>
		<div className="bg-Gray10 w-full fixed top-0 left-0 h-1 z-40" />
		{children}
	</div>
);

export default BarContainer;