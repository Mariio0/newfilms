import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata = {
	title: 'Fresh cinema hits 🎞️ 🍿',
	description:
		'Check out the newly released movies and choose the best one for you to watch in the cinema.',
	icons: { icon: './favicon.ico' },
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
