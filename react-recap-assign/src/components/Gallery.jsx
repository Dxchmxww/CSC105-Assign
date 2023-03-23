import "../Style/Gallery.css"
function Gallery(){
    return( 
    <section className="gallery">
     <h2>Gallery</h2>
        <ul>
            <li><img width={200} src="https://i.etsystatic.com/6315841/r/il/e6b16e/1227049391/il_1588xN.1227049391_2ev8.jpg"/></li>
            <li><img width={200} src="https://i.etsystatic.com/6315841/r/il/e6b16e/1227049391/il_1588xN.1227049391_2ev8.jpg"/></li>
            <li><img width={200} src="https://i.etsystatic.com/6315841/r/il/e6b16e/1227049391/il_1588xN.1227049391_2ev8.jpg"/></li>
        </ul>
    </section>
    )
}
export default Gallery;