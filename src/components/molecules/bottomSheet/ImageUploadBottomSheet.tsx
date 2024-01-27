import { IconButton, DefaultButton } from '@components/atoms';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';

const ImageUploadBottomSheet = () => {
	const { type, isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	if (!isBottomSheetOpen || type !== 'imageUpload') {
		return null;
	}

	return (
		<Drawer open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
			<DrawerContent className="mx-auto w-full max-w-[600px] px-6 !h-[206px]">
				<IconButton
					onClick={closeBottomSheet}
					icon={{
						id: 'close',
						color: colors.Gray60,
						size: 24,
					}}
					className="!w-fit absolute top-1 right-0"
				/>
				<div>
					<h4 className="text-Gray60 typography-Body4 typography-M mb-2 whitespace-pre-line">
						잠시만요!
					</h4>
					<div>
						<h2 className="text-Black typography-Body1 typography-M">
							혹시 주문을 하셨나요? <br />
							<span>캡쳐본을 통해 구매인증</span>을 하고, <br />
							환급액을 받아보세요!
						</h2>
					</div>
				</div>
				<DefaultButton
					title="구매 인증하러 가기"
					color={{
						bgColor: 'Primary',
						textColor: 'White',
					}}
					size="large"
					className="m-auto"
				/>
			</DrawerContent>
		</Drawer>
	);
};

export default ImageUploadBottomSheet;
