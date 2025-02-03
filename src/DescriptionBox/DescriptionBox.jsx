import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';

function DescriptionBox(){

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eveniet praesentium debitis distinctio at dicta omnis quia laborum eos! Quae ex aspernatur tempore, rerum delectus quam ab eveniet tenetur in aliquid veniam eligendi animi nihil, beatae maxime quod quos repudiandae libero. Perspiciatis asperiores eum eius debitis sequi, neque facilis laboriosam nisi voluptatibus omnis reprehenderit hic. Magni aspernatur quod placeat nihil.
            </TabPanel>
            <TabPanel value="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro doloribus animi aperiam ex ullam eius a quibusdam! Repellendus molestias sed ex? Beatae molestiae perspiciatis nemo praesentium ullam. Facilis, adipisci quidem. Pariatur aut quia nobis libero architecto a accusantium placeat excepturi, obcaecati, dignissimos sed. Pariatur ad quaerat magni iure saepe sapiente aliquid ducimus explicabo. Non vitae nisi natus perspiciatis accusamus!
            </TabPanel>
        </TabContext>
    )
}

export default DescriptionBox