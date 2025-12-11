import { useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		
		try {
			const value = window.localStorage.getItem(key);
			
			return value !== null ? JSON.parse(value) : defaultValue;
			
		} catch (error) {
			console.error("Error reading from localStorage:", error);
			return defaultValue;
		}
	});

	const setValue = (newValue: T) => {
		try {
			setStoredValue(newValue);
			const stringValue = JSON.stringify(newValue);

			if (typeof Storage !== "undefined") {
				window.localStorage.setItem(key, stringValue);
				
			} else {
				console.error("localStorage is not supported");
			}
		} catch (error) {
			console.error("Error saving to localStorage:", error);
		}
	};

	return [
		storedValue,
		setValue,
	] as const;
};

export default useLocalStorage;