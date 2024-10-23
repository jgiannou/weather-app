import { IBackgroundImageProps } from "./BackgroundImage.types"

const BackgroundImage = ({ src, alt }: IBackgroundImageProps) => {
    return (
        <img src={src} alt={alt} className="blur-sm h-full w-full object-cover absolute left-0 top-0 z-0 object-center" />
    )
}
export default BackgroundImage