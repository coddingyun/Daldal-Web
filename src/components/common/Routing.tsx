import LoginBottomSheet from '@components/molecules/LoginBottomSheet';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import Withdrawal from '@pages/Withdrawal';
import { useModalStore } from '@stores/layerStore';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => {
	const { Modal } = useModalStore();

	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/home" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
			<Route path="/point" component={Point} exact />
			<Route path="/image-upload" component={ImageUpload} exact />
			<Route path="/withdrawal" component={Withdrawal} exact />
			<LoginBottomSheet />
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
