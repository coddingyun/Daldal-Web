export type IconId =
	| 'app-logo'
	| 'direction-left'
	| 'direction-right'
	| 'home'
	| 'kakaoTalk'
	| 'like-full'
	| 'like-with-num'
	| 'like-empty'
	| 'check'
	| 'circle-check'
	| 'mypage-person'
	| 'point-paid'
	| 'search'
	| 'star'
	| 'category-bags'
	| 'category-hat'
	| 'category-food'
	| 'category-clothes'
	| 'category-jewlery'
	| 'category-makeup'
	| 'category-living'
	| 'category-shoes'
	| 'close'
	| 'baseline-apple'
	| 'custom-like'
	| 'photo'
	| 'plus'
	| 'max'
	| 'circle-cancel'
	| 'category-lotion'
	| 'category-base'
	| 'category-eye'
	| 'category-lip'
	| 'category-innerBeauty'
	| 'bank-nh'
	| 'bank-kb'
	| 'bank-sinhan'
	| 'bank-woori'
	| 'bank-ibk'
	| 'bank-keb'
	| 'bank-kakao'
	| 'bank-dgb'
	| 'bank-bnk'
	| 'bank-mg'
	| 'bank-postOffice'
	| 'bank-kwangju'
	| 'bank-creditUnion'
	| 'bank-sh'
	| 'bank-first'
	| 'bank-kbank'
	| 'bank-industry'
	| 'bank-jeju'
	| 'bank-jeonbuk'
	| 'bank-toss';

type SvgIcon = {
	id: IconId;
	color?: string;
	size?: number;
	width?: number;
	height?: number;
};

export default SvgIcon;
