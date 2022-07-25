

export const SelectOptionData =[
    {option:'Curiosity',value:"curiosity"},                         
    {option:'Opportunity',value:'opportunity'},
    {option:'Spirit',value:'spirit'},
    {option:'Perseverance',value:'perseverance'}];
export const SelectOptionData_RequestType=[
    {option:'Latest',value:"latest"},                                    
    {option:'Front Hazard Avoidance Camera',value:'FHAZ'},
    {option:'Rear Hazard Avoidance Camera',value:'RHAZ'},
    {option:'Mast Camera',value:'MAST'},
    {option:'Chemistry and Camera Complex',value:'CHEMCAM'},
    {option:'Mars Hand Lens Imager',value:'MAHLI'},
    {option:'Navigation Camera',value:'NAVCAM'},
    {option:'Panoramic Camera',value:'PANCAM'},
    {option:'Miniature Thermal Emission Spectrometer (Mini-TES)',value:'MINITES'},

    ];


export class DefaultValues{

    constructor(rover,requestType){
        this.rover=rover;
        this.requestType=requestType
    }
}