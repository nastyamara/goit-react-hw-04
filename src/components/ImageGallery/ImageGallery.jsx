export default function ImageGallery({ images}) {
    return (
        <ul>
	{images.map((image)=>(<li key={image.id}>
		<div>
            <img src={image.urls.small} alt={image.alt_description} />
		</div>
	</li>))}
	
</ul>
    )
}