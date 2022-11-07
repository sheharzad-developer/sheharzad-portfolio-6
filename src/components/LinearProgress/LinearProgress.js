/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100)
                {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            <Box sx={{color:'#000', fontsize:'30px'}}>
                <span>HTML: </span><LinearProgress variant="determinate" value={95} style={{ margin: '20px 0' }} />
                <span>CSS: </span><LinearProgress variant="determinate" value={90} style={{ margin: '20px 0' }} />
                <span>JavaScript: </span><LinearProgress variant="determinate" value={50} style={{ margin: '20px 0' }} />
                <span>Bootstrap: </span><LinearProgress variant="determinate" value={90} style={{ margin: '20px 0' }} />
                <span>ReactJS: </span><LinearProgress variant="determinate" value={70} style={{ margin: '20px 0' }} />
            </Box>
        </Box>
    );
}
