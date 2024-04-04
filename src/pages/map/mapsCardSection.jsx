import { useEffect, useState } from "react";
import { Container, Grid, Skeleton } from "@mui/material";
import getMaps from "@/data/APImaps";
import { TransitionsModal } from "@/components/modal/modal";
import { SectionMaskBorder } from "@/components/sectionMaskBorder/sectionMaskBorder";
import { MapCard } from "./mapCard";
import BackImageMobile from "@/assets/backgroundimages/cloud-900.webp";
import BackImageDesktop from "@/assets/backgroundimages/cloud-1600.webp";
import TopDivider from "@/assets/maskDividers/Top_Divider.svg";

export const MapCardSection = () => {
    const [maps, setMaps] = useState()
    const [openModal, setOpenModal] = useState(false)
    const [selectedMap, setSelectedMap] = useState(null)

    useEffect(() => {
        getMaps()
            .then(res => {
                setMaps(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleOpen = (map) => {
        setSelectedMap(map)
        setOpenModal(true)
    }
    
    const handleClose = () => {
        setOpenModal(false)
    }

    return (    
        <SectionMaskBorder Divider={TopDivider} BgImageDesktop={BackImageDesktop} BgImageMobile={BackImageMobile}>
            <Container maxWidth="xl" sx={{ paddingY: '5rem' }}>
                <Grid container spacing={3}>
                    {!maps ? (
                        Array.from({ length: 12 }).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
                                <Skeleton variant="rectangular" animation="wave" width="100%" height={270} />
                            </Grid>
                        ))
                    ) : (
                        maps?.map(map => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={map.name}>
                                <MapCard map={map} handleOpen={handleOpen}/>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
            {selectedMap && <TransitionsModal image={selectedMap?.screenshot} open={openModal} location={selectedMap?.location} name={selectedMap?.name} handleClose={handleClose} />}
        </SectionMaskBorder>
    );
}