export default function GalleryLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<section>
			{modal}
			{children}
		</section>
	);
}
