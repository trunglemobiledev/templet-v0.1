import { Image } from 'react-native';

const renderTabIcon = (image: any, tintColor: any, size: number) => {
    return (
        <Image
            source={image}
            style={[{ width: 24, height: 24, tintColor }]}
            resizeMethod='scale' resizeMode='contain' />
    )
}

const renderDrawerIcon = (image: any, tintColor: any, size: number) => {
    return (
        <Image
            source={image}
            style={[{ width: 24, height: 24, tintColor }]}
            resizeMethod='scale' resizeMode='contain' />
    )
}

const HELPERS = {
    renderTabIcon,
    renderDrawerIcon
};

export default HELPERS;