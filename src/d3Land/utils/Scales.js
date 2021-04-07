/*
It takes two arguments; ‘data’ & ‘dims.’ You can imagine perhaps using the ‘data’ parameter for setting up your scales’
domains, but we won’t bother in this example. Also perhaps you could add a range parameter, there are lot’s of
possibilities, but for now let’s keep it simple.
 */
import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';
class Scales {
    constructor(data, dims){
        this.setScales(data, dims);
    };
    setScales=(data, dims)=>{
        this.xScale =
            scaleLinear()
                .domain([0, 9])
                .range([0, dims.innerWidth])
        this.yScale =
            scaleLinear()
                .domain([0, 10])
                .range([dims.innerHeight, 0])
    };
};
export default Scales;
