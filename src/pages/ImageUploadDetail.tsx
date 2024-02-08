import { ReactNode } from 'react';

import {
	ApprovedTag,
	KeyValueContainer,
	NotApprovedTag,
	ProgressTag,
} from '@components/atoms';
import { DefaultKeyValueContainer } from '@components/molecules';
import { useGetImageUploadDetailList } from '@hooks/apis/imageUpload';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';
import { ImageUploadDetailRefundStatus } from '@type/refundStatus';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';
import { useParams } from 'react-router-dom';

type StatusValueType = {
	[K in ImageUploadDetailRefundStatus]: ReactNode;
};

const ImageUploadDetail = () => {
	const { buyId } = useParams();
	const { data } = useGetImageUploadDetailList(Number(buyId));

	const statusValue: StatusValueType = {
		COMPLETED: <ApprovedTag size="large" />,
		REJECTED: <NotApprovedTag size="large" />,
		IN_PROGRESS: <ProgressTag size="large" />,
	};

	const renderTextValue = (text: string, typography: string) => (
		<h2 className={`${typography} text-White`}>{text}</h2>
	);

	const renderExtraContents = () => {
		if (data.refundStatus === 'COMPLETED') {
			return (
				<DefaultKeyValueContainer
					title="승인 금액"
					value={getPointText(data.refund)}
				/>
			);
		} else if (data.refundStatus === 'REJECTED') {
			const textValue = renderTextValue(
				data.rejectReason,
				'typography-Body2 typography-R',
			);

			return (
				<KeyValueContainer title="미승인 사유" value={textValue} row={false} />
			);
		} else {
			return null;
		}
	};

	return (
		<PageLayout leftType="back">
			<img src={mockImages[0]} alt="인증 사진" />
			<div className="p-6 flex flex-col gap-6">
				<DefaultKeyValueContainer
					title="업로드 일시"
					value={getDataInYYYYMMDDSplitedByDot(data.uploadTime)}
				/>
				<KeyValueContainer
					title="승인 여부"
					value={statusValue[data.refundStatus]}
				/>
				{renderExtraContents()}
			</div>
		</PageLayout>
	);
};

export default ImageUploadDetail;
