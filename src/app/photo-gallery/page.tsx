import Link from 'next/link';
import { gallery } from './gallery-data';
import Image from 'next/image';

export default function page() {
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="grid grid-cols-4 gap-4 ">
				{gallery.map((item) => (
					<Link key={item.id} href={`/photo-gallery/${item.id}`}>
						<Image src={item.photo} alt="" className=" transition hover:shadow-md" />
					</Link>
				))}
			</div>
		</div>
	);
}
