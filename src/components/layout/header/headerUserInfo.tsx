import { FloatList } from '@/components/molecules/float-list';
import React, { useState } from 'react';

type CHeaderUserInfoProps = {
	isLogin?: boolean;
	userImg?: string;
	userName?: string;
};

function CHeaderUserInfo(
	{
		isLogin = true,
		userName = '홍길동',
		userImg = '/assets/images/user_login.svg',
	}: CHeaderUserInfoProps,
	ref: any
) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="header-user-info">
			{isLogin ? (
				<>
					<button
						onClick={() => setIsOpen((t) => !t)}
						className="header-user-info__box"
						title={isOpen ? '유저 정보 닫기' : '유저 정보 펼쳐보기'}
					>
						<div className="header-user-info__img-box">
							<img src={userImg} alt="img" />
						</div>
						<p className="header-user-info__name">
							{userName} 님<i className="arrow-down"></i>
						</p>
					</button>
					<FloatList />
				</>
			) : (
				<a
					className="header-user-info__box"
					title="로그인하러 가기"
					href="/login"
				>
					<div className="header-user-info__img-box">
						<img src={userImg} alt="img" />
					</div>
					<p className="header-user-info__name">로그인</p>
				</a>
			)}
		</div>
	);
}

const CHeaderUserInfoRef = React.forwardRef(CHeaderUserInfo);
export const HeaderUserInfo = React.memo(CHeaderUserInfoRef);
HeaderUserInfo.displayName = 'HeaderUserInfo';
