
import * as React from 'react';
import {
    Stack,

} from "@chakra-ui/react"

import Home from "../components/Home";
import TimeLine from "../components/TimeLine";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Panelists from "../components/Panelists";
import Contact from "../components/Contact";
import PageGrid from '../components/PageGrid';
// Now you can use the imported components from the components folder
export default function Page() {

    return (
        <>
            <Home />

            <PageGrid
                mainContent={<TimeLine />}
            // navContent and footerContent can be passed similarly
            />
            <PageGrid
                mainContent={<About />}
            />
            <PageGrid
                mainContent={<Panelists />}
            />
            <PageGrid
                mainContent={<Sponsors />}
            />
            <PageGrid
                mainContent={<Contact />}
            />
        </>
    )
};
