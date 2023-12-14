import {
    Box,
    Grid,
    GridItem
} from "@chakra-ui/react"
const PageGrid = ({
    headerContent = null, navContent = null, mainContent = null,
    footerContent = null }) => {
    return (
        <>

            <Grid
                templateAreas={{
                    base: `"header"
                   "nav"
                   "main"
                   "footer"`,
                    md: `"header header"
                 "nav main"
                 "nav footer"`
                }}
                gridTemplateRows={{ base: '40px 1fr 2fr 40px', md: '50px 1fr 30px' }}
                gridTemplateColumns={{ base: '1fr', md: '150px 1fr' }}
                gap={1}
                color='blackAlpha.700'
                fontWeight='bold'
                bg='transparent'
            >
                <GridItem area={'header'}>
                    {headerContent}
                </GridItem>
                <GridItem area={'nav'}>
                    {navContent}
                </GridItem>

                <GridItem area={'main'}>

                    {mainContent}

                </GridItem>

                <GridItem pl='2' area={'footer'}>
                    {footerContent}
                </GridItem>


            </Grid>
        </>
    );
};

export default PageGrid;