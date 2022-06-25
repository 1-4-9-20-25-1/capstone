import { useState, useContext } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from '../Body.module.css';
import ThemeContext from '../../../store/theme-context';

const upload = {
  title: 'Upload Image',
  body: `Please upload your retina image to know the risk.`,
};

function UploadSection(props) {
  const { changeImage, predictImage, clearResult, imageRef } = props;
  const { theme } = useContext(ThemeContext);

  const imageUploadHandler = async (event) => {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      const url = URL.createObjectURL(uploadedImage);
      changeImage(url);
    } else {
      changeImage(null);
    }
    predictImage(uploadedImage);
  };
  const [hovered, setHovered] = useState(false);

  const mouseEnterHandler = () => {
    setHovered(true);
  };

  const mouseLeaveHandler = () => {
    setHovered(false);
  };

  return (
    <Card
      header={upload.title}
      body={upload.body}
      footerStyle={{
        textAlign: 'center',
        height: 35,
      }}
      headerStyle={{ zIndex: 1 }}
      bodyStyle={{ textAlign: 'center', zIndex: 1 }}
      style={{ height: '40%' }}
      buttonHovered={hovered}
    >
      <div className={classes['upload-btn']}>
        <Button
          value={
            <label htmlFor='file-upload' style={{ cursor: 'pointer' }}>
              upload
            </label>
          }
          onClick={() => {
            clearResult();
            changeImage(null);
          }}
          size={'medium'}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        />
        <input
          id='file-upload'
          type='file'
          style={{
            display: 'none',
          }}
          onChange={imageUploadHandler}
          ref={imageRef}
        />
      </div>
    </Card>
  );
}

export default UploadSection;
