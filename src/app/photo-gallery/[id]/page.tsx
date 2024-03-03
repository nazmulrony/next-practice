import Image, { StaticImageData } from 'next/image';
import { gallery } from '../gallery-data';

export default function PhotoDetails({ params: { id } }: { params: { id: string } }) {
	const photoInfo = gallery.find((item) => item.id.toString() == id);
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="mx-auto w-2/5 ">
				<p className="text-center text-2xl font-bold mb-8">{photoInfo?.name}</p>
				<Image src={photoInfo?.photo as StaticImageData} alt="" className="" />
				<p className="font-bold mt-4">Location:{photoInfo?.location}</p>
				<p className="font-bold">Photograph by:{photoInfo?.photographer}</p>
			</div>
		</div>
	);
}
