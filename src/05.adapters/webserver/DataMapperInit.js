import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';

const WebServerDataMapper = {
    mapDataToObject: function(data) {
        const decodedArray1 = decodedString(data.PLC_CarrierSpeed);
    
        return {
            PLC_CarrierSpeed: decodedArray1,
            SelPhysicalLogical: decodedString(data.SelPhysicalLogical),
            BabyNo: data.AGV_No
        };
    }
};

export { WebServerDataMapper as DataMapperInit};