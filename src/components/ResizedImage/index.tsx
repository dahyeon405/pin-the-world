import {Image} from "@chakra-ui/react";

interface ResizeImageProps {
    imageName: string;
    alt?: string;

    [key: string]: any;
}

export const ResizedImage = (props: ResizeImageProps) => {
    const {imageName, alt = '', ...rest} = props;

    const bucket_url = "https://pin-the-world.s3.ap-northeast-2.amazonaws.com/";

    const ext = imageName
        .split(".")
        [imageName.split(".").length - 1].toLowerCase();
    const filename = imageName.slice(0, -(ext.length + 1));

    const image_1x = bucket_url + "resized/" + filename + "%26400";
    const image_2x = bucket_url + "resized/" + filename + "%26960";

    const srcSet = image_1x + " 1x," + image_2x + " 2x";

    return <Image srcSet={srcSet} src={image_2x} {...rest} alt={alt}/>;
};
