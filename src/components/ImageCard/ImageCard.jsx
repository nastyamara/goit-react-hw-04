export default function ImageCard({ image }) {
    return (
     <div>
            <img className='galleryImg' src={image.urls.small}
                alt={image.alt_description} data-source={image.urls.regular} />
		</div>
    )
}