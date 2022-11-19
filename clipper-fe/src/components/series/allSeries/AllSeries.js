import React, {useEffect, useState} from "react";
import type {ISeries} from "../../../services/model/SeriesModel";
import SeriesList from "../viewSeries/SeriesList";
import SeriesApi from "../../../services/api/SeriesApi";
import {Box, Typography} from "@mui/material";

const seriesApi = new SeriesApi();
const debug = false;
const AllSeries = () => {

    const [seriesList: ISeries[], setSeriesList] = useState();

    useEffect(() => {
        async function getAllSeries() {
            const response = await seriesApi.getAllSeries();
            setSeriesList(response.data);
            if (debug) console.log(response.data);
        }

        getAllSeries().then(r => console.log("Series data fetched!"));
    }, [])

    if (seriesList != null)
        return (
            <>
                <div>
                    <Typography variant="h2" align='center' sx={{mt: 2}}>
                        All Series
                    </Typography>
                    <SeriesList
                        seriesListProp={seriesList}/>
                </div>
            </>
        )
}

export default AllSeries;