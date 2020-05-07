import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

export default function LoadingButton(props) {
	const [isLoading, setLoading] = useState(false);
	const onLoad = useRef(props.onLoad);

	useEffect(() => {
		if (isLoading) {
			onLoad.current().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	function handleClick() {
		setLoading(true);
	}

	return (
		<Button variant="contained" size="small" disabled={isLoading} onClick={!isLoading ? handleClick : null} >
			{isLoading ? 'Loading…' : props.label}
		</Button>
	);
}
