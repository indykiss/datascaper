


import React from 'react';
//import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import Scape from "./ScapeForm";

const ScapeContainer = state => {
    const see_the_scape = this.state;

    return (
        <div>
            {see_the_scape.stock_name}
            {see_the_scape.start_date}
            {see_the_scape.end_date}

        </div>
    )


    // const scape = props.scape.map((scape, index) => {
    //   return <li key={index}>{scape.start_date}{scape.end_date}</li>;
    // });

    // return (
    //     <div>
    //         <XYPlot
    //             width={300}
    //             height={300}>
    //             <VerticalGridLines />
    //             <HorizontalGridLines />
    //             <XAxis />
    //             <YAxis />
    //             <LineSeries
    //                 data={[
    //                     {x: 1, y: 4},
    //                     {x: 5, y: 2},
    //                     {x: 15, y: 6}
    //                 ]}/>
    //         </XYPlot>       
    //     </div>
    // );
    
}
    
export default Scape; 