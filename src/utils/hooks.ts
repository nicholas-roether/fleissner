import React from "react";

function usePreviousValue<T>(value: T): T | undefined {
	const ref = React.useRef<T>();
	React.useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export {
	usePreviousValue
}