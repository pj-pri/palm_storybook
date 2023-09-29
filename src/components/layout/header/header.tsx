import LinkButton from '@/components/atoms/LinkButton';
import { GlobeLinks } from '@/components/molecules';
import React from 'react';
import { HeaderSearch } from './headerSearch';
import { HeaderUserInfo } from './headerUserInfo';
import { Navigation } from './navigation';

type HeaderProps = {
	nowPgae?: string;
};

function CHeader({}: HeaderProps, ref: any) {
	return (
		<header className="header">
			<div className="header__inner container">
				<div className="header__top">
					<ul>
						<li>
							<LinkButton
								intent="default"
								size="s"
								text="PC 플레이어"
							/>
						</li>
						<li>
							<LinkButton
								intent="default"
								size="s"
								text="이용안내"
							/>
						</li>
					</ul>
					<ul>
						<li>
							<LinkButton
								intent="default"
								size="s"
								text="이용권관리"
							/>
						</li>
						<li>
							<LinkButton
								intent="default"
								size="s"
								text="고객센터"
							/>
						</li>
						<li>
							<LinkButton
								intent="default"
								size="s"
								text="회원가입"
							/>
						</li>
						<li>
							<GlobeLinks selected="ko" />
						</li>
					</ul>
				</div>
				<div className="header__mid">
					<div className="left">
						<img
							className="header-logo"
							src="/assets/images/palm_logo.svg"
							alt="palm player logo"
						/>
						<HeaderSearch />
					</div>
					<div>
						<HeaderUserInfo isLogin={false} />
					</div>
				</div>
				<div className="header__bottom">
					<Navigation />
				</div>
			</div>
		</header>
	);
}
const CHeaderRef = React.forwardRef(CHeader);
export const Header = React.memo(CHeaderRef);
Header.displayName = 'Header';
