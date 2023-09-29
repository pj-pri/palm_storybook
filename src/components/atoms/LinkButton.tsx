import React from 'react';

type CLinkButtonProps = {
	link?: string;
	text?: React.ReactNode;
	intent?: string;
	size?: 's' | 'm' | 'l';
};

function CLinkButton({
	text,
	link = '/',
	intent,
	size = 'm',
}: CLinkButtonProps) {
	return (
		<div data-size={size} data-intent={intent} className="link-button">
			<a href={link}>{text}</a>
		</div>
	);
}

const LinkButton = React.memo(CLinkButton);
export default LinkButton;
