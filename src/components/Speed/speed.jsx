import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const actions = [
    { icon: <DownloadForOfflineIcon />, name: 'Baixar CV' },
];

export default function BasicSpeedDial() {
    return (

        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => { window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1vZGB7_9f4v7kufSlqTwogy_lRDZ6oRJY&export=download' }}
                />
            ))}
        </SpeedDial>
    );
}
