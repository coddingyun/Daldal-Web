import ImageContainer from '@components/molecules/ImageContainer';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'molecules/ImageContainer',
	component: ImageContainer,
	decorators: [
		Story => (
			<div style={{ width: '101px' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ImageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Approved: Story = {
	args: {
		imageUrl: 'https://via.placeholder.com/2560x1440',
		status: 'APPROVED',
	},
};

export const Progress: Story = {
	args: {
		imageUrl: 'https://via.placeholder.com/2560x1440',
		status: 'PROGRESS',
	},
};

export const Not_Approved: Story = {
	args: {
		imageUrl: 'https://via.placeholder.com/2560x1440',
		status: 'NOT_APPROVED',
	},
};
