import { Box, ImageList, ImageListItem, Stack } from '@mui/material';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {

  const handleClick=(e)=>{
    console.log(e.target.data);
    
  }


	return (
		<Stack spacing={4}>
			<Box sx={{ width: '98vw', height: 'calc(100% - 90px)', }}>
				<ImageList sx={{
          p:'5px',
          width:'100%',
          gridTemplateColumns:'repeat(auto-fill,minmax(280px, 1fr))!important',
        }} >
					{images.map((image) => (
						<ImageListItem onClick={handleClick}
            sx={{
              transition:'.2s',
              '&:hover':{
                cursor:'pointer',
                scale:'1.05',
                zIndex:'1',
              }
            }}
							key={image.id}
              title={image.tags}
              data-large={image.largeImageURl}
              
						>
							<img src={image.webformatURL} alt={image.tags} data-large={image.largeImageURl}/>
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
