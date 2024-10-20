import { IBackgroundImageProps } from "./BackgroundImage.types"

const BackgroundImage = ({ src, alt }: IBackgroundImageProps) => {
    return (
        <img src={src} alt={alt} className="blur-sm h-full w-full object-cover absolute z-0" />
    )
}
export default BackgroundImage