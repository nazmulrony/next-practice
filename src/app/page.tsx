import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className="min-h-screen grid place-items-center">
				<Link href="/photo-gallery" className="text-2xl font-bold">
					Dive into the Photo gallery
				</Link>
			</div>
		</main>
	);
}
