import { DefaultButton } from '@components/index';
import { EditWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useWishListEditStore } from '@stores/wishListStore';

const EditWishList = () => {
	const checkedItems = useWishListEditStore(state => state.checkedItems);

	const handleDeleteItems = () => {
		//TODO delete api
	};

	return (
		<>
			<EditWishListHeader />
			<div className="my-3">
				<ProductCardList type="checkbox" />
			</div>
			{checkedItems.length > 0 && (
				<FixedBottomLayout childrenPadding="px-6" height="h-15">
					<DefaultButton
						title="삭제하기"
						color={{
							textColor: 'Black',
							bgColor: 'White',
						}}
						size="large"
						onClick={handleDeleteItems}
					/>
				</FixedBottomLayout>
			)}
		</>
	);
};

export default EditWishList;