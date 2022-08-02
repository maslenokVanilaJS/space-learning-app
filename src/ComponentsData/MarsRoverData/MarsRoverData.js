          const CommomOptionData=[
     {option:'Front Hazard Avoidance Camera',value:'FHAZ'},
     {option:'Rear Hazard Avoidance Camera', value:'RHAZ'},
     {option:'Navigation Camera',            value:'NAVCAM'},
];

   Object.freeze(CommomOptionData);

   export const SelectOptionData =[
    {option:'Curiosity',   value:"curiosity"},                         
    {option:'Opportunity', value:'opportunity'},
    {option:'Spirit',      value:'spirit'},
    {option:'Perseverance',value:'perseverance'}];

   export const SelectOptionData_RequestType=[
    {option:'Latest',                                            value:"latest"},                                    
    {option:'Mast Camera',                                       value:'MAST'},
    {option:'Chemistry and Camera Complex',                      value:'CHEMCAM'},
    {option:'Mars Hand Lens Imager',                             value:'MAHLI'},
    {option:'Panoramic Camera',                                  value:'PANCAM'},
    {option:'Miniature Thermal Emission Spectrometer (Mini-TES)',value:'MINITES'},
    ...CommomOptionData

    ];

    export const SelectOptionData_RequestType_Curiosity=[
    {option:'Latest',                                            value:"latest"},                                    
    {option:'Mast Camera',                                       value:'MAST'},
    {option:'Chemistry and Camera Complex',                      value:'CHEMCAM'},
    {option:'Mars Hand Lens Imager',                             value:'MAHLI'},
    {option:'Mars Descent Imager',                               value:'MARDI'},

    ...CommomOptionData

    ];

    export const SelectOptionData_RequestType_Opportunity$Spirit=[
    {option:'Latest',                                            value:"latest"},                                    
    {option:'Panoramic Camera',                                  value:'PANCAM'},
    {option:'Miniature Thermal Emission Spectrometer (Mini-TES)',value:'MINITES'},
  
    ...CommomOptionData

    ];


    export const SelectOptionData_RequestTypePerseverance=[
    {option:'Latest',                               value:"latest"},                                        
    {option:'Rover Down-Look Camera',               value:'EDL_RDCAM'	},                                    
    {option:'Rover Up-Look Camera',                 value:'EDL_RUCAM'},	
    {option:'Descent Stage Down-Look Camera',       value:'EDL_DDCAM'	},
    {option:'Parachute Up-Look Camera A ',          value:'EDL_PUCAM1'	},
    {option:'Parachute Up-Look Camera B',           value:'EDL_PUCAM2'	},
    {option:'Navigation Camera - Left',             value:'NAVCAM_LEFT'},
    {option:'Navigation Camera - Right',            value:'NAVCAM_RIGHT'},
    {option:'Mast Camera Zoom - Left',              value:'MCZ_LEFT'	},
    {option:'Front Hazard Avoidance Camera - Left', value:'FRONT_HAZCAM_LEFT_A'	},  
    {option:'Front Hazard Avoidance Camera - Right',value:'FRONT_HAZCAM_RIGHT_A'	},
    {option:'Rear Hazard Avoidance Camera - Left',  value:'REAR_HAZCAM_LEFT'	},
    {option:'Rear Hazard Avoidance Camera - Right', value:'REAR_HAZCAM_RIGHT'	},
    {option:'MEDA Skycam',                          value:'SKYCAM'	},
    {option:'SHERLOC WATSON Camera',                value:'SHERLOC_WATSON'	}, 
 
    ];

export class DefaultValues{

    constructor(rover,requestType){
        this.rover=rover;
        this.requestType=requestType
    }
}