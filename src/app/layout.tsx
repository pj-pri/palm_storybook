import '../styles/common.css';
import '../styles/header.css';
import '../styles/footer.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Palm Player',
	description: 'The world best worshp song player App',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body className="">{children}</body>
		</html>
	);
}
