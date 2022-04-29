//for progress bar
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';


function ProgressBar() {

    const [progress, setProgress] = React.useState(0);


    //to do with progress bar
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 45);
            });
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);


    return (

        <LinearProgress variant="determinate" value={progress} />

    )
}

export default ProgressBar;



// QUESTION




