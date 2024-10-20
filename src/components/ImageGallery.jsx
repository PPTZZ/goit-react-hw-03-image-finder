import { ImageList, ImageListItem, Stack } from '@mui/material';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <Stack spacing={4}>
      <ImageList rowHeight={150} variant='masonry' cols={6}>
        {images.map(image => (
          <ImageListItem key={image.id}>
            <img src={image.previewURL} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
export default ImageGallery;
