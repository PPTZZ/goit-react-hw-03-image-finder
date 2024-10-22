import { Box, ImageList, ImageListItem, Stack } from '@mui/material';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
	return (
		<Stack spacing={4}>
			<Box sx={{ width: '98vw', height: 'calc(100% - 90px)', }}>
				<ImageList sx={{
          p:'5px',
          width:'100%',
          gridTemplateColumns:'repeat(auto-fill,minmax(280px, 1fr))!important',
        }} >
					{images.map((image) => (
						<ImageListItem
            sx={{
              '&:hover':{
                cursor:'pointer',
                scale:'1.05',
                zIndex:'9999'
              }
            }}
							key={image.id}
              
						>
							<img src={image.webformatURL} />
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Stack>
	);
};

ImageGallery.propTypes = {
	images: PropTypes.array,
};
export default ImageGallery;
