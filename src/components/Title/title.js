import React, { useEffect, useState } from 'react';

const useTitle = (intitalTitle) => {
    const [title, setTitle] = useState(intitalTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    
    return setTitle;
}

export default useTitle;


