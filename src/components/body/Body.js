import React, { useRef, useState } from 'react';
import classes from './Body.module.css';

import InfoSection from './sections/InfoSection';
import UploadSection from './sections/UploadSection';
import DisplaySection from './sections/DisplaySection';
import ResultSection from './sections/ResultSection';
import axios from 'axios';

const URL = 'http://localhost:5000/';

function Body({ mailVisible }) {
	const { container, left, right, slide, main } = classes;

	const [image, setImage] = useState(null);
	const [result, setResult] = useState(null);
	const imageRef = useRef();

	const imageUploadHandler = async (uploadedImage) => {
		const formData = new FormData();
		formData.append('image', uploadedImage);
		const response = await axios.post(URL, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		setResult(response.data);
		imageRef.current.value = null;
	};

	return (
		<div className={main}>
			<div className={`${container} ${mailVisible ? slide : ''}`}>
				<div className={left}>
					<InfoSection />
					<UploadSection
						changeImage={setImage}
						imageRef={imageRef}
						predictImage={imageUploadHandler}
						clearResult={() => setResult('')}
					/>
				</div>
				<div className={right}>
					<DisplaySection image={image} />
					<ResultSection result={result} />
				</div>
			</div>
			<div className={`${container} ${mailVisible ? slide : ''}`}></div>
		</div>
	);
}

export default Body;

// can do this or
/* <div className={`${main} ${mailVisible ? slide : ''}`}> */
// this
/* <div className={`${container} ${mailVisible ? slide : ''}`}> */
